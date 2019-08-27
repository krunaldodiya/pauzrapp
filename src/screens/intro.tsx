import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {changeName} from '../store/actions';
import getAuthUserSelector from '../store/selectors/auth';

interface IntroProps {
  navigation: NavigationScreenProp<any, any>;
}

const Intro = (props: IntroProps) => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const authUser = getAuthUserSelector(state);

  return (
    <View style={{flex: 1}}>
      <View>
        <Text>{authUser && authUser.name}</Text>
      </View>

      <TouchableOpacity
        onPress={() => dispatch(changeName({id: 1, name: 'kalpit'}))}
        style={{backgroundColor: 'red', marginRight: 10, padding: 15, borderRadius: 50}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Change Name
        </Text>
      </TouchableOpacity>

      <View style={{padding: 10}}>
        <Button title="skip" onPress={() => props.navigation.replace('RequestOtp')} />
      </View>
    </View>
  );
};

export default React.memo(Intro);
