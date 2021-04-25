import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Forgot from "../screens/Forgot";
import Welcome from "../screens/Welcome";
import Browse from "../screens/Browse";

const Stack = createStackNavigator();

 const AuthStack = () => {
      return (
        <Stack.Navigator options={{ headerShown: false }} mode='modal'>
          <Stack.Screen
            options={{ headerShown: false }}
            component={Welcome}
            name='Welcome'
          />
          <Stack.Screen
            options={{ headerShown: false }}
            component={SignUp}
            name='SignUp'
          />
          <Stack.Screen
            options={{ headerShown: false }}
            component={Login}
            name='Login'
          />
          <Stack.Screen
            options={{ headerShown: false }}
            component={Forgot}
            name='Forgot'
          />
          <Stack.Screen
            options={{ headerShown: false }}
            component={Tabs}
            name='Browse'
          />
        </Stack.Navigator>
      );
    };
    
export default AuthStack;