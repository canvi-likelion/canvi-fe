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

import backIcon from "../../assets/back.png";
import drawStyle9 from "../../assets/img/drawStyle9.png";
import drawStyle1 from "../../assets/img/drawStyle1.png";
import drawStyle2 from "../../assets/img/drawStyle2.png";
import drawStyle3 from "../../assets/img/drawStyle3.png";
import drawStyle4 from "../../assets/img/drawStyle4.png";
import drawStyle5 from "../../assets/img/drawStyle5.png";
import drawStyle6 from "../../assets/img/drawStyle6.png";
import drawStyle7 from "../../assets/img/drawStyle7.png";
import drawStyle8 from "../../assets/img/drawStyle8.png";
import {useDispatch} from "react-redux";
import {setPictureStyle} from "../../store/reducers/picture-slice";

const images = {
  1: drawStyle9,
  2: drawStyle1,
  3: drawStyle2,
  4: drawStyle3,
  5: drawStyle4,
  6: drawStyle5,
  7: drawStyle6,
  8: drawStyle7,
  9: drawStyle8,
};

const data = [
  { id: "1", title: "수채화", image: images[1], value: 'Watercolor style' },
  { id: "2", title: "연필", image: images[2], value: 'Pencil sketch'  },
  { id: "3", title: "만화", image: images[3], value: 'Cartoon style'  },
  { id: "4", title: "디지털 아트", image: images[4], value: 'Digital art'  },
  { id: "5", title: "레트로 포스터", image: images[5], value: 'Retro poster'  },
  { id: "6", title: "사진 리얼리즘", image: images[6], value: 'Photorealism'  },
  { id: "7", title: "미니멀리즘", image: images[7], value: 'Minimalism'  },
  { id: "8", title: "콜라주", image: images[8], value: 'Collage'  },
  { id: "9", title: "낙서", image: images[9], value: 'Doodle'  },
];

const ChooseDrawStyle = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();

  const handleBackPress = () => navigation.goBack();
  const handleWriteDiaryPress = () => {
    if (selectedId) {
      navigation.navigate("ChooseDate", { selectedStyle: selectedId });
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={[styles.gridItem, isSelected && styles.selectedGridItem]}
        onPress={() => {
          setSelectedId(item.id)
          dispatch(setPictureStyle(item.value))
        }}
      >
        <Image source={item.image} style={styles.gridImage} />
        <Text style={styles.gridTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={handleBackPress}>
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerText}>어떤 스타일로 그릴까요?</Text>
      </View>
      <View style={styles.gridContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.grid}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, !selectedId && styles.disabledButton]}
        onPress={handleWriteDiaryPress}
        disabled={!selectedId}
      >
        <Text
          style={[styles.buttonText, !selectedId && styles.disabledButtonText]}
        >
          일기 작성하기
        </Text>
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
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 19.2,
    color: "#22215B",
  },
  gridContainer: {
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
    fontSize: 9,
    color: "#666666",
  },
  button: {
    backgroundColor: "#6C99F0",
    paddingVertical: 15,
    margin: 30,
    borderRadius: 25,
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  disabledButtonText: {
    color: "#FFFFFF",
  },
});

export default ChooseDrawStyle;
