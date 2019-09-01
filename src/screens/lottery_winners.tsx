import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RegularImagePost from '../components/Posts/regular_image_post';
import PostModel from '../models/post';

const LotteryWinners = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'lottery/getLotteryWinners', payload: null});
  }, []);

  const feed = useSelector((state: any) => state.feed);
  const post = useSelector((state: any) => state.post);

  const sortedFeed = feed.feeds
    .map((feed: any) => post.posts[feed])
    .sort((a: PostModel, b: PostModel) => b.id - a.id);

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

export default React.memo(LotteryWinners);
