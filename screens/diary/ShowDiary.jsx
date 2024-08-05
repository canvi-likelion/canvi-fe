import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useApi } from "../../hooks/useApi";
import backIcon from "../../assets/back.png";

const ShowDiary = ({ navigation, route }) => {
  const { selectedDate } = route.params;
  const [diaryData, setDiaryData] = useState({
    title: "",
    content: "",
    comment: "",
    imageUrl: "",
  });
  const { getDiary } = useApi();

  useEffect(() => {
    const fetchDiaryData = async () => {
      try {
        const data = await getDiary(selectedDate);
        setDiaryData(data);
      } catch (error) {
        console.error("Error fetching diary data:", error);
        // 에러 처리 로직 추가 (예: 사용자에게 알림)
      }
    };

    fetchDiaryData();
  }, [selectedDate]);

  const handleGoHome = () => {
    navigation.navigate("MainPage");
  };

  if (!diaryData) {
    return <Text>Loading...</Text>; // 또는 로딩 스피너 컴포넌트
  }

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
        <Image source={{ uri: diaryData.imageUrl }} style={styles.image} />
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
});

export default ShowDiary;
