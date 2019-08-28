import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {NavigationScreenProp} from 'react-navigation';
import getAssets from '../libs/image';
import screens from '../libs/screens';

interface IntroProps {
  navigation: NavigationScreenProp<any, any>;
}

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/images/intro/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/images/intro/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun3',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../assets/images/intro/3.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'somethun4',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../assets/images/intro/3.png'),
    backgroundColor: '#22bcb5',
  },
];

const renderItem = (data: any) => {
  const {item} = data;

  return (
    <View style={{}}>
      <Text style={{}}>{item.title}</Text>
      <Image style={{}} source={{uri: getAssets(item.image)}} />
      <Text style={{}}>{item.text}</Text>
    </View>
  );
};

const Intro = (props: IntroProps) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppIntroSlider
        slides={slides}
        renderItem={data => renderItem(data)}
        onDone={() => navigation.replace(screens.RequestOtp)}
        onSkip={() => navigation.replace(screens.RequestOtp)}
        showSkipButton
        showDoneButton
        showNextButton
        showPrevButton
        activeDotStyle={{backgroundColor: 'lightblue'}}
        dotStyle={{backgroundColor: 'white'}}
      />
    </SafeAreaView>
  );
};

export default React.memo(Intro);
