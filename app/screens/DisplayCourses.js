import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Svg, { Path } from "react-native-svg";
 
// Colors based on the 60-30-10 rule
const primaryColor = "#f5f5f5"; // Light gray for text
const secondaryColor = "#270722"; // Dark purple for sections
const LightsecondaryColor = "#5c2053"; // Dark purple for sections
const accentColor = "#f5cd2c"; // Green for accents (buttons, highlights)

// Data for each section
const BASIC_CONCEPTS = [
  { id: "1", title: "Variables and Data Types" },
  { id: "2", title: "Control Flow" },
  { id: "3", title: "Functions" },
  { id: "4", title: "Modules and Packages" },
];

const ADVANCED_TOPICS = [
  { id: "1", title: "Decorators" },
  { id: "2", title: "Generators" },
  { id: "3", title: "Context Managers" },
  { id: "4", title: "Concurrency and Parallelism" },
];

const LIBRARIES_AND_FRAMEWORKS = [
  { id: "1", title: "NumPy" },
  { id: "2", title: "Pandas" },
  { id: "3", title: "Flask" },
  { id: "4", title: "Django" },
];

const Item = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        {
          backgroundColor: isHovered ? secondaryColor : LightsecondaryColor,
        },
      ]}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      {isHovered ? (
        <Entypo name="circle" size={24} color={accentColor} />
      ) : (
        <Entypo name="circle" size={24} color="white" />
      )}
      <Text style={styles.listText}>{title}</Text>
    </TouchableOpacity>
  );
};

const DisplayCourses = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={styles.svgBackground}
        >
          <Path
            fill="#270722"
            fill-opacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,165.3C672,160,768,192,864,181.3C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></Path>
        </Svg>
        <View style={styles.overlayContent}>
          {/* <Entypo
            name="person-circle"
            size={60}
            color={accentColor}
            style={styles.userIcon}
          /> */}
          <Text style={styles.xpText}>0 XP</Text>
        </View>
      </View>
      <View style={{ padding: 15 }}>
        <View style={styles.sectionContainer}>
          <Text style={styles.headerText} numberOfLines={1}>
            Basic Concepts
          </Text>
          <FlatList
            data={BASIC_CONCEPTS}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.headerText} numberOfLines={1}>
            Advanced Topics
          </Text>
          <FlatList
            data={ADVANCED_TOPICS}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.headerText} numberOfLines={1}>
            Libraries and Frameworks
          </Text>
          <FlatList
            data={LIBRARIES_AND_FRAMEWORKS}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: primaryColor, // background for the whole container
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  topView: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 100, // Adjust height as neede
  },
  svgBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  overlayContent: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingHorizontal: 10, // Adjust as needed
    paddingVertical: 5, // Adjust as needed
  },
  userIcon: {
    marginBottom: 1,
  },
  xpText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  sectionContainer: {
    backgroundColor: LightsecondaryColor, // background for sections
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: primaryColor, // Changed color for better contrast
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 7,
  },
  listText: {
    color: primaryColor,
    fontWeight: "900",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default DisplayCourses;
