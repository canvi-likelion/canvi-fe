import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useApi } from "../../hooks/useApi";
import backIcon from "../../assets/back.png";
import placeholderImage from "../../assets/img/completeMakeAiDiary.png"; // 기본 이미지 경로

const ShowDiary = ({ navigation, route }) => {
  const { selectedDate } = route.params;
  const [diaryData, setDiaryData] = useState({
    title: "",
    content: "",
    comment: "",
    imageUrl: null,
  });
  const { getDiary } = useApi();
  const [isLoading, setIsLoading] = useState(true);

  const fetchDiaryData = useCallback(async () => {
    if (!selectedDate) return;

    setIsLoading(true);
    try {
      const data = await getDiary(selectedDate);
      setDiaryData(data);
    } catch (error) {
      console.error("Error fetching diary data:", error);
      // 에러 처리 로직 추가 (예: 사용자에게 알림)
    } finally {
      setIsLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    fetchDiaryData();
  }, [fetchDiaryData]);

  const handleGoHome = () => {
    navigation.navigate("MainPage");
  };

  const [month, day] = selectedDate.split("-").slice(1); // "YYYY-MM-DD" 형식 가정

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
          {month}월 {day}일
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={
              diaryData.imageUrl
                ? { uri: diaryData.imageUrl }
                : placeholderImage
            }
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>{diaryData.title}</Text>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.description}>{diaryData.content}</Text>
          <View style={styles.commentContainer}>
            <Text style={styles.commentTitle}>AI 코멘트:</Text>
            <Text style={styles.commentText}>{diaryData.comment}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
          <Text style={styles.homeButtonText}>홈으로</Text>
        </TouchableOpacity>
      </View>

      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#6C99F0" />
          <Text style={styles.loadingText}>일기 가져오는 중...</Text>
        </View>
      )}
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
    fontWeight: "bold",
    marginBottom: 15, // 기존 10에서 15로 증가
    marginTop: -5, // 위쪽으로 살짝 띄우기
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  imageContainer: {
    width: 240, // 컨테이너의 크기를 명시적으로 지정
    height: 240,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center", // 세로 중앙 정렬
    alignItems: "center", // 가로 중앙 정렬
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 15,
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
  commentContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
    color: "#333",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#6C99F0",
  },
});

export default ShowDiary;
