import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Image,
  View,
} from "react-native";

// Functional Component App
export default function App() {
  const handlePress = () => {
    console.log("Press");
  };
  // console.log(require("./assets/icon.jpg")); // reference to a number
  return (
    <View style={styles.container}>
      <Text>LMS</Text>
      <StatusBar style="auto" />
      {/* <Image source={require("./assets/icon.jpg")}></Image> */}
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image
          source={{
            uri: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
            width: 200,
            height: 300,
          }}
        ></Image>
      </TouchableOpacity>
      <TouchableNativeFeedback onPress={() => console.log("View Tapped")}>
        <View
          style={{ width: 200, height: 50, backgroundColor: "yellow" }}
        ></View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
