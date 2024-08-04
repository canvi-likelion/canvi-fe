import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { requestApi } from "./utils/apiSetting";
import { useSelector } from "react-redux";

const backIcon = require("./assets/back.png");

const AICompleteDiary = ({ navigation, route }) => {
  const { gptResult, selectedMonth, selectedDay, selectedDate, subject } =
    route.params; // Access the passed date parameter
  const reduxUserInfo = useSelector((state) => state.userInfo);

  const handleDiary = () => {
    requestApi
      .post(
        "/diaries",
        {
          title: subject,
          content: gptResult,
          diaryDate: selectedDate,
        },
        {
          headers: {
            Authorization: `Bearer ${reduxUserInfo.accessToken}`,
          },
        }
      )
      .then((res) => {
        navigation.navigate("MainPage");
      })
      .catch((err) => {
        console.log(err, "hi");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.dateText}>
          {selectedMonth}월 {selectedDay}일
        </Text>
        <Image
          source={require("./assets/img/completeMakeAiDiary.png")}
          style={styles.image}
        />
        <Text style={styles.title}>{subject}</Text>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.description}>{gptResult}</Text>
        </ScrollView>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => {
            handleDiary();
          }}
        >
          <Text style={styles.homeButtonText}>홈으로</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    height: 250,
    margin: 15,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: "#4A90E2",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  dateText: {
    fontSize: 19.2,
    color: "#666666",
    marginBottom: 10,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#22215B",
  },
  description: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: "#6C99F0",
    padding: 15,
    borderRadius: 30,
    width: "60%",
  },
  homeButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
    textAlign: "center",
  },
});

export default AICompleteDiary;
