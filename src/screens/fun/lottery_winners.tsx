import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
        <View style={{padding: 10}}>
          <Text>{item.user.name}</Text>
          <Text>Won {item.amount}</Text>
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
          ItemSeparatorComponent={() => <View style={{height: 10, backgroundColor: '#ccc'}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(LotteryWinners);
