import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = {
  1: require("./assets/img/drawStyle1.png"),
  2: require("./assets/img/drawStyle2.png"),
  3: require("./assets/img/drawStyle3.png"),
  4: require("./assets/img/drawStyle4.png"),
  5: require("./assets/img/drawStyle5.png"),
  6: require("./assets/img/drawStyle6.png"),
  7: require("./assets/img/drawStyle7.png"),
  8: require("./assets/img/drawStyle8.png"),
  9: require("./assets/img/drawStyle9.png"),
};

const data = [
  { id: "1", title: "TYPE 1", image: images[1] },
  { id: "2", title: "TYPE 2", image: images[2] },
  { id: "3", title: "TYPE 3", image: images[3] },
  { id: "4", title: "TYPE 4", image: images[4] },
  { id: "5", title: "TYPE 5", image: images[5] },
  { id: "6", title: "TYPE 6", image: images[6] },
  { id: "7", title: "TYPE 7", image: images[7] },
  { id: "8", title: "TYPE 8", image: images[8] },
  { id: "9", title: "TYPE 9", image: images[9] },
];

const ChooseDrawStyle = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate("ChooseDate")}
    >
      <Image source={item.image} style={styles.gridImage} />
      <Text style={styles.gridTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>어떤 스타일로 그릴까요?</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>일기 작성하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    justifyContent: "space-between",
  },
  backButton: {
    margin: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  grid: {
    paddingHorizontal: 20,
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  gridImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  gridTitle: {
    fontSize: 14,
    color: "#666666",
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 15,
    margin: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ChooseDrawStyle;
