import React from 'react';
import {Dimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface SponsoredImagePostProps {
  data: any;
}

const SponsoredImagePost = (props: SponsoredImagePostProps) => {
  const {data} = props;
  const {item} = data;
  const {width} = Dimensions.get('window');

  return (
    <View
      style={{
        width: width,
        height: width,
        marginBottom: 10,
        justifyContent: 'center',
      }}>
      <FastImage
        style={{
          width: width,
          height: width,
        }}
        source={{uri: item.url}}
      />
    </View>
  );
};

export default SponsoredImagePost;
