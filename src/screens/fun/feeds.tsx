import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RegularImagePost from '../../components/Posts/regular_image_post';

const Feeds = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'feed/getFeeds', payload: {}});
  }, []);

  const feed = useSelector((state: any) => state.feed);

  const feedsList = Object.keys(feed.feeds)
    .map(key => feed.feeds[key])
    .sort((a: any, b: any) => b.id - a.id);

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
          data={feedsList}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{height: 10, backgroundColor: '#ccc'}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Feeds);
