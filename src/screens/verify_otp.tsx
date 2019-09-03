import React, {useState} from 'react';
import {Button, SafeAreaView, StatusBar, TextInput, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useDispatch, useSelector} from 'react-redux';
import screens from '../libs/screens';

const VerifyOtp = (props: any) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState();

  const {country, mobile} = useSelector((state: any) => state.otp);
  const loading = useSelector((state: any) => state.otp.loading);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: '#FFF'}}
        overlayColor="rgba(0, 0, 0, 0.75)"
      />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D62A2'}}>
        <View style={{padding: 20}}>
          <TextInput
            value={otp}
            style={{color: 'white', borderWidth: 1, borderColor: 'white', paddingLeft: 10}}
            onChangeText={value => setOtp(value)}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Button
            title="verify otp"
            onPress={() => {
              dispatch({type: 'otp/verifyOtp', payload: {country, mobile, otp, fcm_token: ''}});
              props.navigation.replace(screens.VerifyOtp);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(VerifyOtp);
