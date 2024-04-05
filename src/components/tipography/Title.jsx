import React from "react";

import styled from "styled-components";

const StyledTitle = styled.Text`
  font-size: 50px;
  font-weight: 900;
  text-align: center;
  padding: 40px 0;
  color: aliceblue;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
