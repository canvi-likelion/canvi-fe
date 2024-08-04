import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const backIcon = require("./assets/back.png");

const AIHelpDiary = ({ navigation, route }) => {
  const { selectedMonth, selectedDay, selectedDate } = route.params;
  const [selectedTab, setSelectedTab] = useState(null);

  const diaryOptions = {
    "일상 기록": [
      { label: "하루의 일정", text: "오늘 하루 동안 어떤 일들을 하였나요?" },
      { label: "특별한 순간", text: "오늘 가장 기억에 남는 순간은 언제였나요?" },
      { label: "장소 기록", text: "오늘 어떤 장소들을 방문했나요?" },
      { label: "식사 기록", text: "오늘 무엇을 먹었나요?" },
      { label: "새로운 경험", text: "오늘 새롭게 경험한 것이 있나요?" },
      { label: "만난 사람들", text: "오늘 누구를 만났나요?" },
      { label: "시간 관리", text: "오늘 하루 시간 관리를 어떻게 했나요?" },
    ],
    "감정 표현": [
      { label: "질문 형식", text: "오늘 어떤 일이 가장 기억에 남았나요?" },
      { label: "상황 묘사", text: "아침에 일어났을 때 어떤 기분이 들었나요?" },
      { label: "감정 단어", text: "오늘 느낀 감정을 한 단어로 표현해보세요." },
      { label: "감정의 변화", text: "하루 중 감정이 변한 순간이 있었나요?" },
      { label: "감정의 원인", text: "오늘 느낀 감정의 원인은 무엇인가요?" },
      { label: "다른 사람과의 대화", text: "오늘 그 대화에서 어떤 감정을 느꼈나요?" },
      { label: "감정의 색깔", text: "오늘의 감정은 어떤 색깔이 떠오르나요?" },
    ],
    "목표 설정": [
      { label: "단기 목표", text: "이번 주에 달성하고 싶은 목표는 무엇인가요?" },
      { label: "장기 목표", text: "올해 안에 이루고 싶은 목표가 무엇인가요?" },
      { label: "동기부여", text: "동기 부여 방법은 무엇인가요?" },
      { label: "과거 경험", text: "이전에 비슷한 목표 설정 및 경험이 있나요?" },
      { label: "목표 시각화", text: "목표를 달성했을 때의 모습을 상상해보세요." },
      { label: "행동 계획", text: "목표 달성을 위해 어떻게 행동해야 하나요?" },
      { label: "하루 목표", text: "목표 달성을 위해 어떻게 행동해야 하나요?" },
    ],
    "회고와 성찰": [
      { label: "오늘의 성찰", text: "오늘 하루를 돌아보며 무엇을 배웠나요?" },
      { label: "감사한 점", text: "오늘 하루 중 감사한 순간은 무엇이었나요?" },
      { label: "감정 성찰", text: "오늘 느낀 감정들을 되돌아보세요." },
      { label: "도전과 극복", text: "오늘 직면한 가장 큰 도전은 무엇이었나요?" },
      { label: "사고 전환", text: "오늘 하루 중 생각을 바꾸게 된 순간이 있나요?" },
      { label: "목표 반성", text: "오늘 세운 목표를 잘 달성했나요?" },
      { label: "미래 계획", text: "내일 어떻게 더 나은 하루를 만들 수 있을까요?" },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonbackText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>도와드릴게요.</Text>
      </View>

      <Text style={styles.subtitle}>
        제공된 양식을 통해 함께 일기를 작성해보아요.
      </Text>

      <View style={styles.tabContainer}>
        {["일상 기록", "감정 표현", "목표 설정", "회고와 성찰"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.tabButton, selectedTab === type && styles.activeTabButton]}
            onPress={() => setSelectedTab(type)}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === type && styles.activeTabButtonText,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scrollContainer}>
        {diaryOptions[selectedTab]?.map((option, index) => (
          <View key={index} style={styles.detailContainer}>
            <Icon name="book-outline" size={30} color="#22215B" />
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{option.label}</Text>
              <Text style={styles.labelSubText}>{option.text}</Text>
            </View>
            <TouchableOpacity
              style={styles.chooseButton}
              onPress={() =>
                navigation.navigate("AIWriteDiary", {
                  selectedMonth: selectedMonth,
                  selectedDay: selectedDay,
                  selectedDate: selectedDate,
                })
              }
            >
              <Text style={styles.chooseButtonText}>작성하기</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    width: 265,
  },
  navButton: {
    padding: 10,
  },
  navButtonbackText: {
    fontSize: 13,
    color: "#B8CBF0",
  },
  navTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#22215B",
  },
  subtitle: {
    fontSize: 13.3,
    textAlign: "center",
    color: "#666666",
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  tabButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: "#6C99F0",
  },
  tabButtonText: {
    fontSize: 11.14,
    color: "#333",
  },
  activeTabButtonText: {
    color: "#FFF",
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    padding: 13,
  },
  labelContainer: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#6C99F0",
  },
  labelSubText: {
    fontSize: 9,
    color: "#6C99F0",
  },
  chooseButton: {
    backgroundColor: "#6C99F0",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  chooseButtonText: {
    color: "#FFF",
    fontSize: 10,
  },
});

export default AIHelpDiary;
