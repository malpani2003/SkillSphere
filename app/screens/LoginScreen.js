import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Image,
  Dimensions,
} from "react-native";

// Define colors for consistent use
const colors = {
  lightPrimary: "#f5f5f5",
  darkPrimary: "#270722",
  lightSecondary: "#5c2053",
  accent: "#f5cd2c",
  text: "black",
  buttonText: "white",
  borderColor: "black",
  placeholderText: "#888",
  forgetPassword: "gray",
};

// Get screen width
const screenWidth = Dimensions.get("window").width;

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require("../assets/icon2.png")} style={styles.image} />
        <Text style={styles.welcomeText}>Welcome Back,</Text>
        <Text>Sign in to Continue</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your email"
          placeholderTextColor={colors.placeholderText}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          accessibilityLabel="Email input"
          accessibilityHint="Enter your email address"
        />
        <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={colors.placeholderText}
          secureTextEntry // for password
          onChangeText={(pass) => setPassword(pass)}
          accessibilityLabel="Password input"
          accessibilityHint="Enter your password"
        />
        <Text style={styles.forgetPassword}>Forget Password?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          accessibilityLabel="Login button"
          accessibilityHint="Press to log in"
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signUp}>
          New User?{" "}
          <Text style={{ color: colors.lightSecondary }}>Sign-up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.lightPrimary, // Set background color
  },
  headerContainer: {
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.5,
    height: 100,
    marginBottom: 10,
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
    color: colors.text, // Set text color
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.text, // Set text color
  },
  input: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: colors.borderColor, // Set border color
    color: colors.text, // Set text color
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: colors.lightSecondary, // Set button background color
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.buttonText, // Set button text color
  },
  forgetPassword: {
    marginTop: 10,
    color: colors.forgetPassword,
    fontWeight: "900",
  },
  signUp: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
});
