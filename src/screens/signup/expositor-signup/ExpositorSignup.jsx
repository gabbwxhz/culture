import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'

import Card from '../../../components/layout/Card'
import GradientBackground from '../../../components/layout/GradientBackground'
import RadiusBackground from '../../../components/layout/RadiusBackground'
import Title from '../../../components/tipography/Title'

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: aliceblue;
  align-items: center;
`

const StyledText = styled.Text`
  margin-top: 5px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '70px')};
  font-size: 20px;
  color: #8b8b8b;
  font-weight: 500;
`

export default function ExpositorSignup({ navigation }) {
  return (
    <StyledSafeAreaView>
      <GradientBackground>
        <Title paddingBottom="70px" paddingTop="70px" fontSize="45px">
          Usuário expositor
        </Title>
        <RadiusBackground>
          <Card onPress={() => navigation.navigate('ExpositorUserSignup')}>
            <Image
              source={require('../../../../assets/images/user.png')}
              resizeMode="contain"
              style={{ width: 120 }}
            />
          </Card>
          <StyledText>Pessoa física</StyledText>
          <Card onPress={() => navigation.navigate('LegalExpositorUserSignup')}>
            <Image
              source={require('../../../../assets/images/legal-user.png')}
              resizeMode="contain"
              style={{ width: 135, marginTop: 30 }}
            />
          </Card>
          <StyledText marginBottom="10px">Pessoa jurídica</StyledText>
        </RadiusBackground>
      </GradientBackground>
    </StyledSafeAreaView>
  )
}
