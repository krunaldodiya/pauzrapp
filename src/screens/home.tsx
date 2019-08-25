import React from 'react';
import Swiper from 'react-native-swiper';
import Intro from '../containers/intro';
import Post from '../containers/post';

const Home = (props: any) => {
  return (
    <Swiper
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      showsButtons={false}
      showsPagination={false}
      loop={false}>
      <Post {...props} />
      <Intro {...props} />
    </Swiper>
  );
};

export default Home;
