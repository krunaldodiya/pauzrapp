import React from 'react';
import {Button, FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import AffiliateImagePost from '../components/affiliate_image_post';
import AffiliateVideoPost from '../components/affiliate_video_post';
import RegularImagePost from '../components/regular_image_post';
import RegularVideoPost from '../components/regular_video_post';
import SponsoredVideoPost from '../components/sponosred_video_post';
import SponsoredImagePost from '../components/sponsored_image_post';

const Post = (props: any) => {
  // const user = useSelector((state: any) => {
  //   return state.user.users.find((user: any) => user.id == state.auth.authUserId);
  // });

  // const dispatch = useDispatch();
  // const changeName = () => dispatch({type: 'CHANGE_NAME', payload: {props}});

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
      <StatusBar barStyle="light-content" backgroundColor="black" />

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

export default Post;
