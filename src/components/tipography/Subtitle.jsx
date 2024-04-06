import React from "react";

import styled from "styled-components";

const StyledSubtitle = styled.Text`
  font-size: 26px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "20px") };
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "20px") };
  font-weight: 700;
  text-align: center;
  color: #161616;
  max-width: 250px;
`;

export default function Subtitle({ children, marginBottom, marginTop }) {
  return <StyledSubtitle marginBottom={marginBottom} marginTop={marginTop}>{children}</StyledSubtitle>;
}
