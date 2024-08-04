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

const ShowDiary = ({ navigation, route }) => {
  const { selectedMonth, selectedDay, title, content } = route.params; // Access the passed date parameter
  const reduxUserInfo = useSelector((state) => state.userInfo);

  const handleDiary = () => {
    navigation.navigate("MainPage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.dateText}>
          {selectedMonth}월 {selectedDay}일
        </Text>
        <Image
          source={require("./assets/img/completeMakeAiDiary.png")}
          style={styles.image}
        />
        <Text style={styles.title}>{title}</Text>
        <ScrollView>
          <Text style={styles.description}>{content}</Text>
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
    paddingHorizontal: 20,
    marginTop: 60,
  },
  dateText: {
    fontSize: 16,
    color: "#4A90E2",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 25,
  },
  homeButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default ShowDiary;
