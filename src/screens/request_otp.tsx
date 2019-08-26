import React from 'react';
import styled from 'styled-components/native';

const goToHome = (props: any) => props.navigation.replace('Home');

const RequestOtp = (props: any) => {
  return (
    <IntroWrapper>
      <IntroInfo>
        <IntroText>RequestOtp screen</IntroText>
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

export default RequestOtp;
