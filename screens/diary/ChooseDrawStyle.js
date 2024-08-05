import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const backIcon = require('../../assets/back.png');

const images = {
  1: require("../../assets/img/drawStyle9.png"),
  2: require("../../assets/img/drawStyle1.png"),
  3: require("../../assets/img/drawStyle2.png"),
  4: require("../../assets/img/drawStyle3.png"),
  5: require("../../assets/img/drawStyle4.png"),
  6: require("../../assets/img/drawStyle5.png"),
  7: require("../../assets/img/drawStyle6.png"),
  8: require("../../assets/img/drawStyle7.png"),
  9: require("../../assets/img/drawStyle8.png"),
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
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={[styles.gridItem, isSelected && styles.selectedGridItem]}
        onPress={() => setSelectedId(item.id)}
      >
        <Image source={item.image} style={styles.gridImage} />
        <Text style={styles.gridTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerText}>어떤 스타일로 그릴까요?</Text>
      </View>
      <View style={styles.gridcontainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ChooseDate")}>
        <Text style={styles.buttonText}>일기 작성하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 19.2,
    color: "#22215B",
  },
  gridcontainer: {
    marginHorizontal: 15,
  },
  grid: {
    paddingHorizontal: 20,
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    opacity: 1,
  },
  selectedGridItem: {
    opacity: 0.3,
  },
  gridImage: {
    width: 100,
    height: 100,
  },
  gridTitle: {
    fontSize: 8.96,
    color: "#666666",
  },
  button: {
    backgroundColor: "#6C99F0",
    paddingVertical: 15,
    margin: 30,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ChooseDrawStyle;
