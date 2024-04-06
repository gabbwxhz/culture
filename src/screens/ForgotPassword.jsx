import React from "react";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

import styled from "styled-components";

import GradientBackground from "../components/layout/GradientBackground";
import RadiusBackground from "../components/layout/RadiusBackground";
import Input from '../components/inputs/Input'
import Title from "../components/tipography/Title";
import Subtitle from '../components/tipography/Subtitle';
import Button from "../components/inputs/Button";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: aliceblue;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #8b8b8b;
  margin-right: 5px;
`

const StyledTextButton = styled.Text`
    font-weight: 900;
    color: #8b8b8b;
`

const BackLoginContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
`

export default function ForgotPassword({ navigation }) {
  return (
    <StyledSafeAreaView>
      <GradientBackground paddingTop="80px"  >
        <Title paddingBottom="80px" >
            Esqueci minha senha!
        </Title>
        <RadiusBackground>
        <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 120,
            }}
          >
          <Subtitle marginBottom="80px">Enviaremos um e-mail para verificação</Subtitle>
            <Input placeholder="E-mail" />
              <Button marginTop="40px" onPress={() => console.log('ahahah')}>Enviar</Button>
              <BackLoginContainer>
                <StyledText>Voltar para</StyledText>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <StyledTextButton>Login</StyledTextButton>
                </TouchableOpacity>
              </BackLoginContainer>
          </ScrollView>
        </RadiusBackground>
      </GradientBackground>
    </StyledSafeAreaView>
  );
}
