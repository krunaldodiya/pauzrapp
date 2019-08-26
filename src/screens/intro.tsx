import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {changeName} from '../stores/actions/change_name';
import {AuthContext} from '../stores/providers/auth';
import {UserContext} from '../stores/providers/user';
import getAuthUser from '../stores/selectors';

const goToHome = (props: any) => props.navigation.replace('RequestOtp');

const Intro = (props: any) => {
  const [authState, authDispatch] = useContext(AuthContext);
  const [userState] = useContext(UserContext);

  const authUser = getAuthUser({name: authState.name, users: userState.users});

  return (
    <IntroWrapper>
      <View>
        <Text>{authUser && authUser.name}</Text>
      </View>

      <TouchableOpacity
        onPress={() => authDispatch(changeName('kalpit'))}
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

      <IntroInfo>
        <IntroText>I'm an intro, you can skip me too.</IntroText>
      </IntroInfo>

      <IntroInfo>
        <IntroButton title="skip" onPress={goToHome.bind(null, props)} />
      </IntroInfo>
    </IntroWrapper>
  );
};

const IntroWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: 10;
`;

const IntroInfo = styled.View`
  padding-left: 10;
  margin-bottom: 10;
`;

const IntroText = styled.Text`
  color: #000;
`;

const IntroButton = styled.Button`
  color: #000;
`;

export default React.memo(Intro);
