import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import {useDispatch} from 'react-redux';
import AffiliateImagePost from '../components/Posts/affiliate_image_post';
import AffiliateVideoPost from '../components/Posts/affiliate_video_post';
import RegularImagePost from '../components/Posts/regular_image_post';
import RegularVideoPost from '../components/Posts/regular_video_post';
import SponsoredVideoPost from '../components/Posts/sponosred_video_post';
import SponsoredImagePost from '../components/Posts/sponsored_image_post';
import {getFeeds} from '../store/actions';

const Post = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeeds(null));
  }, []);

  const renderItem = (data: any) => {
    const {item} = data;

    return (
      <React.Fragment>
        {item.type == 'regular' && item.content_type == 'image' && <RegularImagePost data={data} />}

        {item.type == 'regular' && item.content_type == 'video' && <RegularVideoPost data={data} />}

        {item.type == 'sponsored' && item.content_type == 'image' && (
          <SponsoredImagePost data={data} />
        )}

        {item.type == 'sponsored' && item.content_type == 'video' && (
          <SponsoredVideoPost data={data} />
        )}

        {item.type == 'affiliate' && item.content_type == 'image' && (
          <AffiliateImagePost data={data} />
        )}

        {item.type == 'affiliate' && item.content_type == 'video' && (
          <AffiliateVideoPost data={data} />
        )}
      </React.Fragment>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

      <View style={{flex: 1}}>
        <FlatList
          initialNumToRender={10}
          data={require('./posts.json')}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Post);
