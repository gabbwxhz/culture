import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from "react-native";

import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import GradientBackground from "../components/layout/GradientBackground";
import RadiusBackground from "../components/layout/RadiusBackground";
import Input from "../components/inputs/Input";
import Button from "../components/inputs/Button";
import Title from "../components/tipography/Title";
import Subtitle from "../components/tipography/Subtitle";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: aliceblue;
  align-items: center;
`;

const ForgotPasswordTouchable = styled.TouchableOpacity`
  margin-top: -20px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const ForgotPasswordText = styled.Text`
  color: #8b8b8b;
  margin-right: 5px;
`;

const RememberMeContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RememberMeText = styled.Text`
  color: #8b8b8b;
`;

const Checkbox = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  padding-bottom: 1px;
  border: 1px solid #8b8b8b;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export default function LoginScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledSafeAreaView>
      <GradientBackground>
        <Title>Bem vindo(a) ao App!</Title>
        <RadiusBackground>
          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 120,
            }}
          >
            <KeyboardAvoidingView
              style={{
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Input placeholder="Digite seu e-mail" autoCorrect={false} />
              <Input
                placeholder="Digite sua senha"
                secureTextEntry
                autoCorrect={false}
              />
              <ForgotPasswordTouchable>
                <ForgotPasswordText>Esqueci minha senha!</ForgotPasswordText>
              </ForgotPasswordTouchable>
              <Button>Entrar</Button>
              <RememberMeContainer>
                <Checkbox onPress={toggleCheckbox}>
                  {isChecked && (
                    <MaterialIcons name="check" size={15} color="#8b8b8b" />
                  )}
                </Checkbox>
                <RememberMeText>Lembrar de mim!</RememberMeText>
              </RememberMeContainer>
              <Subtitle>Não tem uma conta?</Subtitle>
              <Button
                bgColor={"#8B8B8B"}
                onPress={() => navigation.navigate("SignupChoose")}
              >
                Cadastre-se
              </Button>
            </KeyboardAvoidingView>
          </ScrollView>
        </RadiusBackground>
      </GradientBackground>
    </StyledSafeAreaView>
  );
}
