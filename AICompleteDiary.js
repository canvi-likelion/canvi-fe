import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AICompleteDiary = ({ navigation }) => {
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
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.image}
        />
        <Text style={styles.title}>
          명상의 힘: 마음을 가라앉히고 내면 평화 찾기
        </Text>
        <Text style={styles.description}>
          여행은 새로운 경험과 추억을 선사하지만, 올바른 준비가 필수입니다. 이번
          블로그 포스트에서는 여행자가 가져가야 할 10가지 필수 아이템을 상세히
          소개합니다. 첫째, 편안한 여행을 위한 맞춤형 여행 가방. 두 번째는
          다양한 환경에 대비할 수 있는 다용도 의류... (내용이 더 길다면 여기까지
          표시)
        </Text>
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
