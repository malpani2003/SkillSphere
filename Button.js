import {
  StyleSheet,
  Button,
  Alert,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";

// Functional Component App
export default function App() {
  return (
    <SafeAreaView style={[{ backgroundColor: "orange" }, styles.container]}>
      <Button
        title="Click Me"
        color="orange"
        onPress={() =>
          Alert.alert("My new Title", "My message", [
            {
              text: "Yes",
              onPress: () => {
                console.log("Yes");
              },
            },
            {
              text: "No",
              onPress: () => {
                console.log("No");
              },
            },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
