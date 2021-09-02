import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, Button, View, StatusBar } from "react-native";

export default function Home({ navigation }) {
  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar barStyle={theme.dark ? "default" : "dark-content"} />
      <Text style={{ color: colors.text }}>Home dsdfsdfsdfScreen</Text>
      <Button title="Detail Screen" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
}

const styles = StyleSheet.create({});
