import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import { Avatar, Title, Caption, Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Share from "react-native-share";
import files from "../assets/FileBase64";

export default function ProfileScreen() {
  const myCustomShare = async () => {
    const shareOptions = {
      message: "Order your next meal from foodfinder App",
      url: files.appLogo,
      // url: files.samplePdf,
      // urls: [files.image1, files.image2],
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log("Error => ", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ marginTop: 15, flexDirection: "row" }}>
          <Avatar.Image source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} size={80} />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>Gokul Raj</Title>
            <Caption style={styles.caption}>@goku_l_raj</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Kerala, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>9946984743</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>gokulraj.k.p123@gmal.com</Text>
        </View>
      </View>
      <View style={styles.infoBoxWraper}>
        <View style={[styles.infoBox, { borderRightColor: "#dddddd", borderRightWidth: 1 }]}>
          <Title>$140</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>
      <View style={styles.menuWraper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuitem}>
            <Icon name="heart-outline" color="#ff6347" size={25} />
            <Text style={styles.menuItemtext}>Your favorities</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuitem}>
            <Icon name="credit-card" color="#ff6347" size={25} />
            <Text style={styles.menuItemtext}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            myCustomShare();
          }}
        >
          <View style={styles.menuitem}>
            <Icon name="share-outline" color="#ff6347" size={25} />
            <Text style={styles.menuItemtext}>Tell your friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuitem}>
            <Icon name="account-check-outline" color="#ff6347" size={25} />
            <Text style={styles.menuItemtext}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuitem}>
            <Icon name="cog-outline" color="#ff6347" size={25} />
            <Text style={styles.menuItemtext}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWraper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWraper: {
    marginTop: 10,
  },
  menuitem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemtext: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
