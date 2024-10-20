import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <Logo source={require('../assets/mobiLogo_circle.png')} />
      </LogoContainer>

      <Title>Welcome</Title>
      <Title>To Mobi Baazaar</Title>
      <Tagline>All Mobile Accessories</Tagline>

      <ButtonWrapper>
        <StyledButton>
          <ButtonText>New User ? SIGN UP</ButtonText>
        </StyledButton>

        <StyledButton onPress={() => navigation.navigate('signup')}>
          <ButtonText>LOGIN</ButtonText>
        </StyledButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Splash;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

const LogoContainer = styled.View`
  margin-bottom: 20px;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: contain;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
`;

const Tagline = styled.Text`
  font-size: 14px;
  font-style: italic;
  color: #777;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 20px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #ececec;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const FooterWave = styled.Image`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  resize-mode: cover;
`;
