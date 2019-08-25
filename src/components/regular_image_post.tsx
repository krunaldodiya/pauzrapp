import React from 'react';
import {Dimensions, Image, View} from 'react-native';

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

export default RegularImagePost;
