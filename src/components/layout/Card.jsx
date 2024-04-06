import React from "react";

import styled from "styled-components";

const StyledCard = styled.TouchableOpacity`
  border: 2px solid #8b8b8b;
  border-radius: 20px;

  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Card({ children, onPress }) {
  return <StyledCard onPress={onPress}>{children}</StyledCard>;
}
