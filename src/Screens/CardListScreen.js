import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../Components/Card";
import { data } from "../Model/Data";

export default function CardListScreen({ navigation }) {
  const renderItem = ({ item }) => {
    return <Card itemData={item} onPress={() => {}} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} key={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
});
