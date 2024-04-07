import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '50px')};
  font-weight: 900;
  text-align: center;
  padding-top: ${(props) => props.paddingTop || '40px'};
  padding-bottom: ${(props) => props.paddingBottom || '40px'};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '20px')};

  color: ${(props) => (props.color ? props.color : 'aliceblue')};
`

export default function Title({ children, paddingTop, paddingBottom, fontSize, color, marginTop }) {
  return (
    <StyledTitle
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      fontSize={fontSize}
      color={color}
      marginTop={marginTop}
    >
      {children}
    </StyledTitle>
  )
}
