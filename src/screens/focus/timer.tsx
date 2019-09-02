import React, {useEffect} from 'react';
import {Dimensions, Image, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import getAssets from '../../libs/image';
import TimerCard from './card';

const size = {width: Dimensions.get('window').width, height: Dimensions.get('window').height};

interface TimerProps {
  navigation: NavigationScreenProp<any, any>;
}

const Timer = (props: TimerProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'quote/getQuotes', payload: null});
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({type: 'quote/nextTab', payload: null});
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const quotesLoaded = useSelector((state: any) => state.quote.loaded);
  const quotes = useSelector((state: any) => state.quote.quotes);
  const tab = useSelector((state: any) => state.quote.tab);
  const currentQuote = quotes[tab];

  if (!quotesLoaded) return null;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'skyblue',
          }}>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            {quotes.map((_quote: any, index: number) => {
              const width = size.width / quotes.length - 4;

              return (
                <View
                  key={index.toString()}
                  style={{
                    height: 3,
                    width,
                    backgroundColor: index == tab ? 'black' : 'grey',
                    marginHorizontal: 2,
                  }}
                />
              );
            })}
          </View>

          <View>
            <Image
              style={{
                width: size.width - 20,
                height: size.height - 150,
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={{uri: getAssets(currentQuote.image)}}
            />
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            zIndex: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
            bottom: 20,
          }}>
          <TimerCard
            onTimerCardTap={() => {
              props.navigation.push('Stop', {time: 10});
            }}
            cardMargin={5}
            cardWidth={size.width / 3.1}
            minutes={10}
            points={5}
          />
          <TimerCard
            onTimerCardTap={() => {
              props.navigation.push('Stop', {time: 20});
            }}
            cardMargin={5}
            cardWidth={size.width / 3.1}
            minutes={20}
            points={10}
          />
          <TimerCard
            onTimerCardTap={() => {
              props.navigation.push('Stop', {time: 30});
            }}
            cardMargin={5}
            cardWidth={size.width / 3.1}
            minutes={30}
            points={20}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: 'transparent',
          }}>
          <TouchableOpacity
            onLongPress={value => {
              dispatch({type: 'quote/setState', payload: {playing: false}});
            }}
            onPressOut={() => {
              dispatch({type: 'quote/setState', payload: {playing: true}});
            }}
            onPress={() => {
              dispatch({type: 'quote/previousTab', payload: null});
            }}
            style={{width: '50%'}}
          />
          <TouchableOpacity
            onLongPress={() => {
              dispatch({type: 'quote/setState', payload: {playing: false}});
            }}
            onPressOut={() => {
              dispatch({type: 'quote/setState', payload: {playing: true}});
            }}
            onPress={() => {
              dispatch({type: 'quote/nextTab', payload: null});
            }}
            style={{width: '50%'}}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Timer);
