import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

// Styled Components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 45px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  color: black;
`;

const CheckBoxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckBoxSquare = styled.View`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: #333;
  background-color: ${props => (props.checked ? '#333' : '#fff')};
  margin-right: 10px;
`;

const SignUpButton = styled.TouchableOpacity`
  background-color: black;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 20px;
`;

const SignUpButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const FooterText = styled.Text`
  font-size: 14px;
  color: #333;
`;

const AppText = styled.Text`
  color: #000;
`;

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      {/* Logo */}
      <Logo source={require('../assets/mobiLogo.png')} />

      {/* Name Input */}
      <InputContainer>
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
      </InputContainer>

      {/* Phone Number Input */}
      <InputContainer>
        <Label>Phone Number</Label>
        <Input placeholder="Enter your phone number" keyboardType="phone-pad" />
      </InputContainer>

      {/* Password Input */}
      <InputContainer>
        <Label>Password</Label>
        <Input placeholder="Enter your password" secureTextEntry />
      </InputContainer>

      {/* Confirm Password Input */}
      <InputContainer>
        <Label>Confirm Password</Label>
        <Input placeholder="Confirm your password" secureTextEntry />
      </InputContainer>

      {/* OTP Input */}
      <InputContainer>
        <Label>OTP</Label>
        <Input placeholder="Enter OTP" keyboardType="number-pad" />
      </InputContainer>

      {/* Checkbox */}
      <CheckBoxContainer onPress={() => setIsChecked(!isChecked)}>
        <CheckBoxSquare checked={isChecked} />
        <AppText>
          I have agreed to the{' '}
          <AppText style={{textDecorationLine: 'underline'}}>
            Privacy Agreement
          </AppText>
        </AppText>
      </CheckBoxContainer>

      {/* Sign Up Button */}
      <SignUpButton>
        <SignUpButtonText>SIGN UP</SignUpButtonText>
      </SignUpButton>

      {/* Footer */}
      <FooterText>
        Already have an account?{' '}
        <AppText style={{textDecorationLine: 'underline'}}>Login</AppText>
      </FooterText>
    </Container>
  );
};

export default SignUp;
