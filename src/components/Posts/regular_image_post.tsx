import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import getAssets from '../../libs/image';

interface RegularImagePostProps {
  data: any;
}

const RegularImagePost = (props: RegularImagePostProps) => {
  const {data} = props;
  const {item} = data;

  const {width} = Dimensions.get('window');

  return (
    <View
      style={{
        width: width,
        justifyContent: 'center',
      }}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 16}}>{item.when}</Text>
      </View>
      <FastImage
        style={{
          width: width,
          height: width,
        }}
        source={{uri: getAssets(item.url)}}
      />
    </View>
  );
};

export default RegularImagePost;
