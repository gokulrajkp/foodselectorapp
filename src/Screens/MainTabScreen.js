import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import Explore from "./ExploreScreen";
import Profile from "./ProfileScreen";

import { createStackNavigator } from "@react-navigation/stack";

import Details from "./Detail";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";
import { useTheme } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#ffffff" barStyle={{ backgroundColor: "tomato" }}>
      <Tab.Screen
        name="Home"
        component={Homestackscreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#27ab6d",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Details"
        component={Detailstackscreen}
        options={{
          tabBarLabel: "Updates",
          tabBarColor: "#1064eb",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Expore"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarColor: "#7031de",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="map-marker-circle" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilestackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#e3305f",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

const Homestack = createStackNavigator();
const Detailstack = createStackNavigator();
const Profilestack = createStackNavigator();

const Homestackscreen = ({ navigation }) => (
  <Homestack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#27ab6d",
      },

      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Homestack.Screen
      name="Homes"
      options={{
        title: "overview",
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={20}
            backgroundColor="#27ab6d"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
      component={Home}
    />
  </Homestack.Navigator>
);

const Detailstackscreen = ({ navigation }) => (
  <Detailstack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1064eb",
      },

      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Detailstack.Screen
      name="Detail"
      options={{
        title: "Detail",
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={20}
            backgroundColor="#1064eb"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
      component={Details}
    />
  </Detailstack.Navigator>
);

const ProfilestackScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Profilestack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, //ios
          elevation: 0, //android
        },
        headerTintColor: colors.text,
      }}
    >
      <Profilestack.Screen
        name="ProfileScreen"
        options={{
          title: "",
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={20}
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => (
            <Icon.Button
              name="account-edit"
              size={20}
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => {
                navigation.navigate("EditProfileScreen");
              }}
            />
          ),
        }}
        component={ProfileScreen}
      />
      <Profilestack.Screen
        name="EditProfileScreen"
        options={{
          title: "Edit Profile",
        }}
        component={EditProfileScreen}
      />
    </Profilestack.Navigator>
  );
};

const styles = StyleSheet.create({});
