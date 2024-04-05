import React from "react";
import { Text } from "react-native";

import styled from "styled-components/native"; // Importe da forma correta

const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor || "#fdaa2e"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 55px;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  font-weight: 900;
  color: aliceblue;
  font-size: 18px;
`;

export default function Button({ children, onPress, bgColor }) {
  return (
    <StyledButton bgColor={bgColor} onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}
