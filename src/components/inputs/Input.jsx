import React from "react";
import styled from "styled-components";

const StyledInput = styled.TextInput`
  width: 300px;
  height: 55px;
  border: 1.5px solid #8b8b8b;
  border-radius: 50px;
  padding-left: 20px;
  margin-bottom: 30px;
  font-size: 16px;
  color: #424242;
`;

export default function Input({
  placeholder,
  value,
  secureTextEntry,
  autoCorrect,
}) {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
    />
  );
}
