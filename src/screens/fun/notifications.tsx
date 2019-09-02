import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
        <View>
          <Text>{item.type}</Text>
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
          ItemSeparatorComponent={() => <View style={{height: 10, backgroundColor: '#ccc'}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Notifications);
