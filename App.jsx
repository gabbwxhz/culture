import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import ForgotPassword from './src/screens/ForgotPassword'
import LoginScreen from './src/screens/LoginScreen'
import SignupChoose from './src/screens/signup/SignupChoose'
import VisitorSignup from './src/screens/signup/VisitorSignup'
import ExpositorSignup from './src/screens/signup/expositor-signup/ExpositorSignup'
import ExpositorUserSignup from './src/screens/signup/expositor-signup/ExpositorUserSignup'
import LegalExpositorUserSignup from './src/screens/signup/expositor-signup/LegalExpositorUserSignnup'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="SignupChoose"
          component={SignupChoose}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExpositorSignup"
          component={ExpositorSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VisitorSignup"
          component={VisitorSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExpositorUserSignup"
          component={ExpositorUserSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LegalExpositorUserSignup"
          component={LegalExpositorUserSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}
