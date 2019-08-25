import React from 'react';
import {Dimensions, Image, View} from 'react-native';

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
        backgroundColor: 'black',
        width: width,
        height: width,
        marginBottom: 10,
        justifyContent: 'center',
      }}>
      <Image
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
