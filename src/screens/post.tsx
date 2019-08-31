import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getFeeds} from '../store/actions';

const Post = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeeds(null));
  }, []);

  const feed = useSelector((state: any) => state.feed);
  const post = useSelector((state: any) => state.post);

  const renderItem = (data: any) => {
    const {item} = data;
    const currentPost = post.posts[item];

    return (
      <React.Fragment>
        <View>
          <Text>{currentPost.id}</Text>
        </View>
      </React.Fragment>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

      <View style={{flex: 1}}>
        <FlatList
          initialNumToRender={10}
          data={feed.feeds}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Post);
