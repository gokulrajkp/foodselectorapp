import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import SignupScreen from "./SignupScreen";
import SignInScreen from "./SignInScreen";

const RootStack = createStackNavigator();
export default function RootStackScreen() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignupScreen} />
    </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({});
