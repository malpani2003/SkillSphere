import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Dimensions,
  LinearGradient,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;

// Colors based on the 60-30-10 rule
const primaryColor = "white"; // Light gray for background (60%)
const secondaryColor = "#270722"; // Dark purple for sections (30%)
const accentColor = "#f5cd2c"; // Green for buttons (10%)

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/people-reading-books-study-vector-illustration_74855-4807.jpg?w=740&t=st=1724662603~exp=1724663203~hmac=d6fb9e25186e930d27655e7e00b4933267584b568f72cedc130a38c964666319",
          }}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>SkillSphere</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Nourish Your</Text>
        <Text style={styles.footerText}>Inner Skills</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => console.log("Tapped")}
        >
          <Text style={styles.buttonTextStyle}>
            Get Started <AntDesign name="caretright" size={22} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  imageContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primaryColor,
    overflow: "hidden",
  },
  image: {
    width: screenWidth,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 20, // Rounded corners for image
    // borderWidth: 3, // Border around the image
    // borderColor: secondaryColor, // Color of the border
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: "bold",
    color: secondaryColor,
    marginBottom: 20,
    marginTop: 20,
    // textShadowColor: "#000", // Shadow for text
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 8,
  },
  footerContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: secondaryColor,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 30,
    elevation: 5, // Elevation for shadow effect
  },
  footerText: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: accentColor,
    width: "50%",
    shadowColor: "white",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 25,
    marginTop: 20,
    elevation: 10, // Elevation for shadow effect
  },
  buttonTextStyle: {
    fontWeight: "bold",
    fontSize: 22,
    color: secondaryColor, // Contrast with button background
    textAlign: "center",
  },
});
