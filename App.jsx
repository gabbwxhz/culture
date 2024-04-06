import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import SignupChoose from "./src/screens/signup/SignupChoose";
import ExpositorSignup from "./src/screens/signup/ExpositorSignup";
import VisitorSignup from "./src/screens/signup/VisitorSignup";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
