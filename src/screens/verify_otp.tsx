import React, {useState} from 'react';
import {Button, SafeAreaView, StatusBar, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {verifyOtp} from '../store/actions';
import screens from '../libs/screens';

const VerifyOtp = (props: any) => {
  const {country, mobile} = useSelector((state: any) => state.otp);

  const dispatch = useDispatch();
  const [otp, setOtp] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D62A2'}}>
        <View style={{padding: 20}}>
          <TextInput
            value={otp}
            style={{color: 'white'}}
            onChangeText={value => setOtp(value)}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Button
            title="verify otp"
            onPress={() => {
              dispatch(verifyOtp({country, mobile, otp, fcm_token: ''}));
              props.navigation.replace(screens.VerifyOtp);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(VerifyOtp);
