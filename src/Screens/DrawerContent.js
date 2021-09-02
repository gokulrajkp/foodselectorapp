import React, { useContext, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, useTheme, Switch } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../Components/Context";

export default function DrawerContent(Props) {
  const { signOut, toggleTheme } = useContext(AuthContext);
  const papertheme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...Props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://picsum.photos/seed/picsum/200/300",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15 }}>
                <Title style={styles.title}>Gokul Raj</Title>
                <Caption style={styles.caption}>@goku_l_raj</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sections}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.sections}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => <Icon name="home-outline" color={color} size={size} />}
              label="Home"
              onPress={() => {
                Props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="account-outline" color={color} size={size} />}
              label="Profile"
              onPress={() => {
                Props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="bookmark-outline" color={color} size={size} />}
              label="Bookmark"
              onPress={() => {
                Props.navigation.navigate("Bookmark");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="account-cog-outline" color={color} size={size} />}
              label="Settings"
              onPress={() => {
                Props.navigation.navigate("Setting");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="account-check-outline" color={color} size={size} />}
              label="Support"
              onPress={() => {
                Props.navigation.navigate("Support");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={papertheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => <Icon name="logout" color={color} size={size} />}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  sections: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
