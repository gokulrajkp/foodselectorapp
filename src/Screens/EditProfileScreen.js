import React, { createRef, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  View,
  Text,
  Platform,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAswesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import ImagePicker from "react-native-image-crop-picker";

export default function EditProfileScreen() {
  const [image, setImage] = useState("https://picsum.photos/seed/picsum/200/300");
  const { colors } = useTheme();
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      compressImageQuality: 0.7,
      cropping: true,
    }).then((image) => {
      // console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      // console.log(image.path);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  bs = createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        initialSnap={1}
        renderContent={renderInner}
        renderHeader={renderHeader}
        callbackNode={fall}
        enabledGestureInteraction={false}
      />

      <Animated.View style={{ margin: 20, opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)) }}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
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
                source={{ uri: image }}
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
          <FontAswesome name="user-o" color={colors.text} style={{ marginRight: 10 }} size={20} />
          <TextInput
            placeholder="First Name"
            autoCorrect={false}
            placeholderTextColor="#666666"
            style={[styles.textInputs, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <FontAswesome name="user-o" color={colors.text} style={{ marginRight: 10 }} size={20} />
          <TextInput
            placeholder="Last Name"
            autoCorrect={false}
            placeholderTextColor="#666666"
            style={[styles.textInputs, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} style={{ marginRight: 10 }} size={20} />
          <TextInput
            placeholder="Phone number"
            keyboardType="number-pad"
            autoCorrect={false}
            placeholderTextColor="#666666"
            style={[styles.textInputs, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="email-outline" color={colors.text} style={{ marginRight: 10 }} size={20} />
          <TextInput
            placeholder="First Name"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTextColor="#666666"
            style={[styles.textInputs, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <FontAswesome name="globe" color={colors.text} style={{ marginRight: 10 }} size={20} />
          <TextInput
            placeholder="First Name"
            autoCorrect={false}
            placeholderTextColor="#666666"
            style={[styles.textInputs, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={colors.text} style={{ marginRight: 10 }} size={20} />
          <TextInput
            placeholder="First Name"
            autoCorrect={false}
            placeholderTextColor="#666666"
            style={[styles.textInputs, { color: colors.text }]}
          />
        </View>
        <TouchableOpacity style={styles.CommandBuuton}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
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
    // borderTopColor: "#c1c7c3",
    // borderTopLeftRadius: 20,
    // borderTopEndRadius: 20,
    // elevation: 1,
    // marginTop: 10,
    // borderTopWidth: 1,

    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#ffffff",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    borderTopWidth: 6,
    borderTopColor: "#c1c7c3",
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
  panelButton: {
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
