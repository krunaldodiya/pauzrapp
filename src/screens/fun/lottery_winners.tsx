import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import getAssets from '../../libs/image';

const LotteryWinners = (props: any) => {
  const dispatch = useDispatch();
  const [meta, setMeta] = useState({});

  useEffect(() => {
    const getLotteryWinners: any = dispatch({type: 'lottery/getLotteryWinners', payload: meta});

    getLotteryWinners.then((data: any) => {
      setMeta(data);
    });
  }, []);

  const winners = useSelector((state: any) => state.lottery.winners);

  const winnersList = Object.keys(winners)
    .map(key => winners[key])
    .sort((a: any, b: any) => b.id - a.id);

  const renderItem = (data: any) => {
    const {item} = data;

    return (
      <React.Fragment>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View>
            <Image style={{width: 30, height: 30}} source={{uri: getAssets(item.user.avatar)}} />
          </View>

          <View style={{flex: 1}}>
            <Text>{item.user.name}</Text>
            <Text>Won {item.amount}</Text>
          </View>
        </View>
      </React.Fragment>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

      <View style={{flex: 1}}>
        <FlatList
          data={winnersList}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#ccc'}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(LotteryWinners);
