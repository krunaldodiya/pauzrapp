import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {RootContext} from '../stores/providers/root';
import {changeName} from '../stores/actions/change_name';

const goToHome = (props: any) => props.navigation.replace('RequestOtp');

const Intro = (props: any) => {
  const [state, dispatch] = useContext(RootContext);

  return (
    <IntroWrapper>
      <View>
        <Text>{state.name}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => dispatch(changeName('kalpit'))}>
          <Text>Change Name</Text>
        </TouchableOpacity>
      </View>

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

export default Intro;
