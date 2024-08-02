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

const AICompleteDiary = ({ navigation, route }) => {
  const { gptResult } = route.params; // Access the passed date parameter

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.dateText}>2024년 08월 06일</Text>
        <Image
          source={require("./assets/img/completeMakeAiDiary.png")}
          style={styles.image}
        />
        <Text style={styles.title}>
          명상의 힘: 마음을 가라앉히고 내면 평화 찾기
        </Text>
        <ScrollView>
          <Text style={styles.description}>{gptResult}</Text>
        </ScrollView>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("MainPage")}
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

export default AICompleteDiary;
