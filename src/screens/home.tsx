import React from 'react';
import Swiper from 'react-native-swiper';
import FocusContainer from '../containers/focus';
import FunContainer from '../containers/fun';

const Home = () => {
  return (
    <Swiper
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      showsButtons={false}
      showsPagination={false}
      loop={false}>
      <FocusContainer />
      <FunContainer />
    </Swiper>
  );
};

export default Home;
