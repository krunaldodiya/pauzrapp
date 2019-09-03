import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RegularImagePost from '../../components/Posts/regular_image_post';
import getListByKey from '../../store/selectors/list_by_key';

const Feeds = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'feed/getFeeds', payload: {}});
  }, []);

  const feeds = useSelector((state: any) => state.feed.feeds);
  const feedsList = getListByKey(feeds);

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
