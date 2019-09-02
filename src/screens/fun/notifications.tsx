import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import getAssets from '../../libs/image';

const Notifications = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'notification/getNotifications', payload: null});
  }, []);

  const notifications = useSelector((state: any) => state.notification.notifications);

  const renderItem = (data: any) => {
    const {item} = data;

    return (
      <React.Fragment>
        <View style={{padding: 10}}>
          {item.type == 'App\\Notifications\\UserFollowed' && (
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{width: 30, height: 30}}
                  source={{uri: getAssets(item.user.avatar)}}
                />
              </View>

              <View style={{flex: 1}}>
                <Text>{item.user.name} started following you.</Text>
                <Text>{item.when}</Text>
              </View>
            </View>
          )}

          {item.type == 'App\\Notifications\\PostLiked' && (
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{width: 30, height: 30}}
                  source={{uri: getAssets(item.user.avatar)}}
                />
              </View>

              <View style={{flex: 1}}>
                <Text>{item.user.name} liked your post.</Text>
                <Text>{item.when}</Text>
              </View>

              <View>
                <Image style={{width: 30, height: 30}} source={{uri: getAssets(item.post.url)}} />
              </View>
            </View>
          )}
        </View>
      </React.Fragment>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

      <View style={{flex: 1}}>
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#ccc'}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Notifications);
