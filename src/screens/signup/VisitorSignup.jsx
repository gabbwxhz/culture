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

export default function SignupChoose({ navigation }) {
  return (
    <StyledSafeAreaView>
      <GradientBackground paddingTop="80px">
        <RadiusBackground></RadiusBackground>
      </GradientBackground>
    </StyledSafeAreaView>
  );
}
