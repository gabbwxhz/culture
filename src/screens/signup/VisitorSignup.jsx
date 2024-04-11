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
            <Input
              placeholder="Nome"
              icon="person-outline"
              autoCorrect={false}
              iconType="MaterialIcons" // Especificando o tipo de ícone
            />

            <Input
              placeholder="E-mail"
              icon="mail-outline"
              autoCorrect={false}
              iconType="MaterialIcons" // Especificando o tipo de ícone
            />

            <Input
              placeholder="Senha"
              icon="lock-outline"
              secureTextEntry
              autoCorrect={false}
              iconType="MaterialIcons" // Especificando o tipo de ícone
            />

            <Button marginTop="40px">Cadastrar</Button>
          </ScrollView>
        </RadiusBackground>
      </GradientBackground>
    </StyledSafeAreaView>
  )
}
