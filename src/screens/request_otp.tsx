import React from 'react';
import {View, Text, Button} from 'react-native';

const RequestOtp = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Text>RequestOtp screen</Text>
      </View>

      <View>
        <Button title="skip" onPress={() => props.navigation.replace('Home')} />
      </View>
    </View>
  );
};

export default RequestOtp;
