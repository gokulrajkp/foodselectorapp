import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import Explore from "./ExploreScreen";
import Profile from "./ProfileScreen";

import { createStackNavigator } from "@react-navigation/stack";

import Notification from "./NotificationScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";
import { Avatar, useTheme } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#ffffff" barStyle={{ backgroundColor: "tomato" }}>
      <Tab.Screen
        name="Home"
        component={Homestackscreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#ff6347",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Details"
        component={Detailstackscreen}
        options={{
          tabBarLabel: "Notifications",
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

const Homestackscreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Homestack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, //ios
          elevation: 0, //android
        },
        headerTintColor: colors.text,
      }}
    >
      <Homestack.Screen
        name="Homes"
        options={{
          title: "Food Finder",
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="menu"
                size={20}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <Icon.Button
                name="magnify"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{ paddingHorizontal: 10, marginTop: 5 }}
                onPress={() => {
                  navigation.navigate(Profile);
                }}
              >
                <Avatar.Image
                  source={{
                    uri: "https://picsum.photos/seed/picsum/200/300",
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={Home}
      />
    </Homestack.Navigator>
  );
};

const Detailstackscreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Detailstack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, //ios
          elevation: 0, //android
        },
        headerTintColor: colors.text,
      }}
    >
      <Detailstack.Screen
        name="Detail"
        options={{
          title: "Notifications",
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={20}
              color={colors.text}
              backgroundColor={colors.background}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
        component={Notification}
      />
    </Detailstack.Navigator>
  );
};

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
