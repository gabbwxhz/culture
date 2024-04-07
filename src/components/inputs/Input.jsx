import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import styled from 'styled-components'

const StyledInputContainer = styled.View`
  width: 300px;
  height: 55px;
  border: 1.5px solid #8b8b8b;
  border-radius: 50px;
  padding-left: 20px;
  margin-bottom: 30px;
  font-size: 16px;
  color: #424242;
  flex-direction: row;
  align-items: center;
`

const InputField = styled.TextInput`
  flex: 1;
  margin-left: 10px;
`

export default function Input({ placeholder, value, secureTextEntry, autoCorrect, icon }) {
  return (
    <StyledInputContainer>
      {icon && <MaterialIcons name={icon} size={24} color="#fdaa2e" />}
      <InputField
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
      />
    </StyledInputContainer>
  )
}
