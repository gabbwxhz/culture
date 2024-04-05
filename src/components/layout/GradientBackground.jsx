import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

const GradientContainer = styled(LinearGradient).attrs({
  colors: ["#f4511e", "#ffd754"],
  start: [0, 0],
  end: [1, 0],
})`
  width: 100%;
  height: 500px;
  flex: 1;
  justify-content: center;
`;

export default function GradientBackground({ children }) {
  return <GradientContainer>{children}</GradientContainer>;
}
