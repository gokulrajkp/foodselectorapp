import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default function Detail({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Button title="click" onPress={() => navigation.push("Detail")} />
    </View>
  );
}

const styles = StyleSheet.create({});
