import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useDispatch, useSelector} from 'react-redux';
import screens from '../../libs/screens';

const RequestOtp = (props: any) => {
  const country = useSelector((state: any) => state.otp.country);
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState();

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
        <TouchableOpacity onPress={() => props.navigation.push(screens.SelectCountry)}>
          <View style={{padding: 20}}>
            <Text style={{color: 'white'}}>{country ? country.name : 'Select Country'}</Text>
          </View>
        </TouchableOpacity>

        <View style={{padding: 20}}>
          <TextInput
            value={mobile}
            style={{color: 'white', borderWidth: 1, borderColor: 'white', paddingLeft: 10}}
            onChangeText={value => setMobile(value)}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Button
            title="send otp"
            onPress={() => {
              dispatch({type: 'otp/requestOtp', payload: {mobile, country}});
              props.navigation.replace(screens.VerifyOtp);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(RequestOtp);
