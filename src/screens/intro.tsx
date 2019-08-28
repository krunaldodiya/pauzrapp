import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {NavigationScreenProp} from 'react-navigation';
import screens from '../libs/screens';
import theme from '../libs/theme';

interface IntroProps {
  navigation: NavigationScreenProp<any, any>;
}

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/images/Intro/1.png'),
    backgroundColor: '#0D62A2',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/images/Intro/2.png'),
    backgroundColor: '#0D62A2',
  },
  {
    key: 'somethun3',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../assets/images/Intro/3.png'),
    backgroundColor: '#0D62A2',
  },
  {
    key: 'somethun4',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../assets/images/Intro/3.png'),
    backgroundColor: '#0D62A2',
  },
];

const renderItem = (data: any) => {
  const {item} = data;

  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const Intro = (props: IntroProps) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

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

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#0D62A2',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 60,
    marginHorizontal: 30,
    fontSize: 26,
    fontFamily: theme.fonts.TitilliumWebRegular,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    marginHorizontal: 30,
    fontSize: 20,
    fontFamily: theme.fonts.TitilliumWebRegular,
  },
});

export default React.memo(Intro);
