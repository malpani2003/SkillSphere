import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Formik } from "formik"; // named export
import * as Yup from "yup";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .lowercase()
    .trim()
    .label("Email"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters")
    .label("Password"),
  number: Yup.string().required("Mobile Number is required").label("Mobile"),
});

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
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>SignupScreen</Text>
        <Image source={require("../assets/icon2.png")} style={styles.image} />
      </View>
      <Formik
        initialValues={{ email: "", password: "", number: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Email</Text>
            {touched.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your email"
              placeholderTextColor={colors.placeholderText}
              keyboardType="email-address"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
            {touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={colors.placeholderText}
              secureTextEntry // for password
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            <Text style={[styles.label, { marginTop: 20 }]}>Phone Number</Text>
            {touched.number && (
              <Text style={{ color: "red" }}>{errors.number}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Enter your Mobile Number"
              placeholderTextColor={colors.placeholderText}
              value={values.number}
              onChangeText={handleChange("number")}
              onBlur={handleBlur("number")}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Create an Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.lightPrimary,
  },
  headerContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 30,
    color: colors.text, // Set text color
    textAlign: "center", // Center align the text
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
    padding: 5,
    borderRadius: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: colors.borderColor, // Set border color
    color: colors.text, // Set text color
  },
  image: {
    width: "50%",
    height: screenHeight * 0.2,
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
