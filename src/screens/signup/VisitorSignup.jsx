// SignupChoose.js
import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components'

import Button from '../../components/inputs/Button'
import Input from '../../components/inputs/Input'
import GradientBackground from '../../components/layout/GradientBackground'
import RadiusBackground from '../../components/layout/RadiusBackground'
import Title from '../../components/tipography/Title'

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: aliceblue;
  align-items: center;
`

export default function SignupChoose({ navigation }) {
  return (
    <StyledSafeAreaView>
      <GradientBackground paddingTop="60px">
        <Title paddingBottom="80px">Usuário Visitante</Title>
        <RadiusBackground>
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 130
            }}
          >
            <Input placeholder="Nome" icon="person-outline" autoCorrect={false} />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              icon="mail-outline"
              autoCorrect={false}
            />
            <Input placeholder="Senha" secureTextEntry icon="lock-outline" autoCorrect={false} />

            <Button marginTop="40px">Cadastrar</Button>
          </ScrollView>
        </RadiusBackground>
      </GradientBackground>
    </StyledSafeAreaView>
  )
}
