import React from "react";
import { Image } from "react-native";

import styled from "styled-components";

import GradientBackground from "../../components/layout/GradientBackground";
import RadiusBackground from "../../components/layout/RadiusBackground";
import Title from "../../components/tipography/Title";
import Card from "../../components/layout/Card";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: aliceblue;
  align-items: center;
`;

const StyledText = styled.Text`
  margin-top: 5px;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "70px"};
  font-size: 20px;
  color: #8b8b8b;
  font-weight: 500;
`;

export default function SignupChoose({ navigation }) {
  return (
    <StyledSafeAreaView>
      <GradientBackground>
        <Title paddingBottom="70px" paddingTop="70px">
          Cadastro
        </Title>
        <RadiusBackground>
          <Card onPress={() => navigation.navigate("ExpositorSignup")}>
            <Image
              source={require("../../../assets/images/speaker.png")}
              resizeMode="contain"
              style={{ width: 150 }}
            />
          </Card>
          <StyledText>Sou um expositor</StyledText>
          <Card onPress={() => navigation.navigate("VisitorSignup")}>
            <Image
              source={require("../../../assets/images/user.png")}
              resizeMode="contain"
              style={{ width: 120 }}
            />
          </Card>
          <StyledText marginBottom="10px">Sou um visitante</StyledText>
        </RadiusBackground>
      </GradientBackground>
    </StyledSafeAreaView>
  );
}
