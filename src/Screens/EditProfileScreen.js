import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  View,
  Text,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAswesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                style={{ width: 100, height: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>Gokul Raj</Text>
        </View>
        <View style={styles.action}>
          <FontAswesome name="user-o" style={{ marginRight: 10 }} size={20} />
          <TextInput
            placeholder="First Name"
            autoCorrect={false}
            placeholderTextColor="#666666"
            style={styles.textInputs}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CommandBuuton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ff6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    // borderTopLeftRadius:20,
    // borderTopRightRadius:20,
    // shadowColor:"#000000",
    // shadowOffset:{width:0,height:0},
    // shadowRadius:5,
    // shadowOpacity:0.4
  },
  header: {
    backgroundColor: "#ffffff",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation:5
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 0,
    borderRadius: 4,
    backgroundColor: "#000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubTitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelBottom: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#ff6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ff0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS == "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
