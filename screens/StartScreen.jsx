import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import main1Image from "../assets/main1.png";
import main2Image from "../assets/main2.png";
import main3Image from "../assets/main3.png";

const StartScreen = ({ navigation }) => {
  const entries = [
    { image: main1Image, width: 400, height: 400 },
    { image: main2Image, width: 300, height: 260 },
    { image: main3Image, width: 300, height: 260 },
  ];

  const renderItem = (entry, index) => {
    return (
      <View style={styles.slide} key={index}>
        <Image
          source={entry.image}
          style={{ width: entry.width, height: entry.height }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlemain}>
        <Text style={styles.title}>당신의 하루를</Text>
        <Text style={styles.title}>그림으로 표현해 보세요.</Text>
        <Text style={styles.subtitle}>AI와 함께하는 나만의 그림 일기</Text>
      </View>

      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.dotActive}
      >
        {entries.map((entry, index) => renderItem(entry, index))}
      </Swiper>

      <View style={styles.bottombox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonOutlineText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C99F0",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  titlemain: {
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
  },
  wrapper: {
    height: 500,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  dot: {
    backgroundColor: "#E0E0E0",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: "#000000",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#6C99F0",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonOutline: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000000",
  },
  buttonOutlineText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottombox: {
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
  },
});

export default StartScreen;
