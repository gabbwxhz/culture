import React from "react";

import styled from "styled-components";

const StyledSubtitle = styled.Text`
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
  color: #161616;
`;

export default function Subtitle({ children }) {
  return <StyledSubtitle>{children}</StyledSubtitle>;
}
