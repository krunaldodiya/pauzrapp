import React, {useState} from 'react';
import {Button, SafeAreaView, StatusBar, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestOtp} from '../store/actions';

const RequestOtp = () => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D62A2'}}>
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
