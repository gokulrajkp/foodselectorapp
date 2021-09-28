import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useMemo, useReducer } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./src/Screens/MainTabScreen";
import Home from "./src/Screens/Home";
import DrawerContent from "./src/Screens/DrawerContent";
import Bookmark from "./src/Screens/Bookmark";
import Settings from "./src/Screens/Settings";
import Support from "./src/Screens/Support";
import RootStackScreen from "./src/Screens/RootStackScreen";
import { AuthContext } from "./src/Components/Context";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import LottieView from "lottie-react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  const [isDarkTheme, setisDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const initialLogInState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const logInreducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(logInreducer, initialLogInState);
  const authContext = useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken("qwerty");
        // setIsLoading(false);

        const userToken = foundUser[0].userToken;
        const userName = foundUser[0].userName;

        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (error) {
          console.log(error);
        }

        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (error) {
          console.log(error);
        }
        dispatch({ type: "LOGOUT" });
      },
      singUp: () => {
        // setUserToken("qwerty");
        // setIsLoading(false);
        // setUserToken("qwerty");
      },
      toggleTheme: () => {
        setisDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      console.log(userToken);
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: "RETRIVE_TOKEN", token: userToken });
    }, 2000);
  }, []);
  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView source={require("./src/assets/18168-stay-safe-stay-home.json")} autoPlay loop />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator drawerContent={() => <DrawerContent />}>
              <Drawer.Screen name="TabScrens" options={{ headerShown: false }} component={MainTabScreen} />
              <Drawer.Screen name="Bookmark" component={Bookmark} />
              <Drawer.Screen name="Setting" component={Settings} />
              <Drawer.Screen name="Support" component={Support} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}
