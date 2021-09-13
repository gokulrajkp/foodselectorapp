import React, { useContext, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Fontawesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../Components/Context";
import Users from "../Model/users";
import { useTheme } from "@react-navigation/native";

export default function SignInScreen({ navigation }) {
  const [data, setData] = useState({
    userName: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  console.log("/////////");
  console.log(AuthContext);
  const { colors } = useTheme();
  const { signIn } = useContext(AuthContext);
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const textInputChange = (val) => {
    if (val.length >= 4) {
      setData({
        ...data,
        userName: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        userName: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      // console.log(val.trim().length);
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handleValidPassword = (val) => {
    if (val.trim().length >= 8) {
      // console.log(val.trim().length);
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };
  const logInHandle = (userName, password) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });
    if (data.userName.length == 0 || data.password.length == 0) {
      Alert.alert("Worng Input!", "Username or password field canot be empty", [{ text: "Okey" }]);
      return;
    }
    if (foundUser.length == 0) {
      Alert.alert("Invalid user", "Username or password is incorrect", [{ text: "Okey" }]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.background }]}>
        <Text style={[styles.text_footer, { color: colors.text }]}>UserName</Text>
        <View style={styles.action}>
          <Fontawesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Enter your user name"
            placeholderTextColor="#666666"
            onChangeText={(val) => textInputChange(val)}
            style={[styles.textInput, { color: colors.text }]}
            autoCapitalize="none"
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errormsg}>User name must be 4 character long</Text>
          </Animatable.View>
        )}
        <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Fontawesome name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
            style={[styles.textInput, { color: colors.text }]}
            autoCapitalize="none"
            onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={1000}>
            <Text style={styles.errormsg}>Password must be 8 character long</Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              logInHandle(data.userName, data.password);
            }}
          >
            <LinearGradient colors={["#00d4c4", "#01ab9d"]} style={styles.signIn}>
              <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.signIn, { borderColor: "#009387", borderWidth: 1, marginTop: 15 }]}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS == "ios" ? 0 : -5,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errormsg: {
    color: "#ff0000",
  },
});
