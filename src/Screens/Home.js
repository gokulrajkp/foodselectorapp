import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, Button, View, StatusBar, Image, TouchableOpacity, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import StarRating from "../Components/StarRating";

export default function Home({ navigation }) {
  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? "default" : "dark-content"} />
      <View style={styles.sliderContainer}>
        <Swiper autoplay horizontal={false} height={200} activeDotColor="#ff6347">
          <View style={styles.slide}>
            <Image
              source={require("../assets/Banners/food-banner1.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/Banners/food-banner2.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/Banners/food-banner3.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("CardListScreen", { title: "Restuarent" })}
        >
          <View style={styles.categoryIcon}>
            <Ionicons name="restaurant" size={35} color="#ff6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Restaurent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("CardListScreen", { title: "Fastfood Center" })}
        >
          <View style={styles.categoryIcon}>
            <Ionicons name="pizza" size={35} color="#ff6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("CardListScreen", { title: "Snacks Corner" })}
        >
          <View style={styles.categoryIcon}>
            <Ionicons name="beer" size={35} color="#ff6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("CardListScreen", { title: "Hotels" })}
        >
          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#ff6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate("CardListScreen", { title: "Dineouts" })}
        >
          <View style={styles.categoryIcon}>
            <Ionicons name="restaurant" size={35} color="#ff6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Dineouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="chevron-down" size={35} color="#ff6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Show More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsWrapper}>
        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold", color: "#333" }}>Recently Viewed </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image source={require("../assets/Banners/food-banner1.jpg")} resizeMode="cover" style={styles.cardImg} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amzing Food Place</Text>
            <StarRating ratings={5} reviews={99} />
            <Text style={styles.cardDetails}>Amazing description for the Amazing place</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image source={require("../assets/Banners/food-banner1.jpg")} resizeMode="cover" style={styles.cardImg} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amzing Food Place</Text>
            <StarRating ratings={5} reviews={99} />
            <Text style={styles.cardDetails}>Amazing description for the Amazing place</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image source={require("../assets/Banners/food-banner1.jpg")} resizeMode="cover" style={styles.cardImg} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amzing Food Place</Text>
            <StarRating ratings={5} reviews={99} />
            <Text style={styles.cardDetails}>Amazing description for the Amazing place</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fdeae7" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
