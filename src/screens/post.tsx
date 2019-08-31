import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {getFeeds} from '../store/actions';
import RegularImagePost from '../components/Posts/regular_image_post';

const Post = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getFeeds(null));
  }, []);

  const feed = useSelector((state: any) => state.feed);
  const post = useSelector((state: any) => state.post);

  const sortedFeed = feed.feeds
    .map((feed: any) => post.posts[feed])
    .sort((a: any, b: any) => a.id < b.id);

  const renderItem = (data: any) => {
    return (
      <React.Fragment>
        <RegularImagePost data={data} />
      </React.Fragment>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

      <View style={{flex: 1}}>
        <FlatList
          data={sortedFeed}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{height: 10, backgroundColor: '#ccc'}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Post);
