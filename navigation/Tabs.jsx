import React from "react";
import {  View, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
//import Welcome from "../screens/Welcome";
import Browse from "../screens/Browse";
import Explore from "../screens/Explore";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from "../constants";

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.blue,
        inactiveTintColor: theme.colors.gray,
      }}
      >
          <Tab.Screen
              name="Browse"
              component={Browse}
              options={{
                  tabBarIcon: ({ focused }) => (
                      <View style={{alignItems: 'center', justifyContent: 'center', }} >
                      <Icon name="person" size={20} 
                      color={focused ? theme.colors.blue : theme.colors.gray} style={{ width: 30, height: 30 }} />
                      </View>
                  )
              }}
          />
          <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                  tabBarIcon: ({ focused }) => (
                      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                       <Icon name="settings" size={20} 
                       color={focused ? theme.colors.blue : theme.colors.gray} style={{width: 30, height: 30 }} />
                      </View>
                  )
              }}
          />
          <Tab.Screen
              name="Explore"
              component={Explore}
              options={{
                  tabBarIcon: ({ focused }) => (
                      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="explore" size={20} 
                      color={focused ? theme.colors.blue : theme.colors.gray} style={{width: 30, height: 30 }} />
                      </View>
                  )
              }}
          />
          <Tab.Screen
              name="Product"
              component={Product}
              options={{
                  tabBarIcon: ({ focused }) => (
                      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="shopping-cart" size={20} 
                      color={focused ? theme.colors.blue : theme.colors.gray} style={{ width: 30, height: 30 }} />
                      </View>
                  )
              }}
          />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
      shadowColor: theme.colors.blue,
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
  }
})

export default Tabs;

