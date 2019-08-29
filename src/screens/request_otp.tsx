import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {requestOtp} from '../store/actions';
import screens from '../libs/screens';

const RequestOtp = (props: any) => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D62A2'}}>
        <TouchableOpacity onPress={() => props.navigation.push(screens.SelectCountry)}>
          <View>
            <Text>Select Country</Text>
          </View>
        </TouchableOpacity>

        <View>
          <TextInput
            value={mobile}
            style={{color: 'white'}}
            onChangeText={value => setMobile(value)}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Button title="send otp" onPress={() => dispatch(requestOtp({mobile}))} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(RequestOtp);
