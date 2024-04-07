import React from 'react'
import styled from 'styled-components'

const RadiusContainer = styled.View`
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  background-color: aliceblue;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export default function RadiusBackground({ children }) {
  return <RadiusContainer>{children}</RadiusContainer>
}
