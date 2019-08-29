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
import {useDispatch, useSelector} from 'react-redux';
import screens from '../libs/screens';
import {requestOtp} from '../store/actions';

const RequestOtp = (props: any) => {
  const country = useSelector((state: any) => state.otp.country);
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D62A2'}}>
        <TouchableOpacity onPress={() => props.navigation.push(screens.SelectCountry)}>
          <View style={{padding: 20}}>
            <Text style={{color: 'white'}}>{country ? country.name : 'Select Country'}</Text>
          </View>
        </TouchableOpacity>

        <View style={{padding: 20}}>
          <TextInput
            value={mobile}
            style={{color: 'white'}}
            onChangeText={value => setMobile(value)}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Button title="send otp" onPress={() => dispatch(requestOtp({mobile, country}))} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(RequestOtp);
