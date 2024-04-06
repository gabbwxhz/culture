import React from "react";
import styled from "styled-components";

const StyledTitle = styled.Text`
  font-size: 50px;
  font-weight: 900;
  text-align: center;
  padding-top: ${(props) => props.paddingTop || "40px"};
  padding-bottom: ${(props) => props.paddingBottom || "40px"};
  color: aliceblue;
`;

export default function Title({ children, paddingTop, paddingBottom }) {
  return (
    <StyledTitle paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {children}
    </StyledTitle>
  );
}
