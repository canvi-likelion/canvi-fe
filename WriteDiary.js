import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WriteDiary = ({ navigation, route }) => {
  const { selectedDay, selectedMonth } = route.params; // Access the passed date parameter

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            console.log(selectedDay);
            navigation.goBack();
          }}
        >
          <Text style={styles.navButtonText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>
          {selectedMonth}월 {selectedDay}일의 일기
        </Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() =>
            navigation.navigate("ChooseWeather", {
              selectedDay: selectedDay,
              selectedMonth: selectedMonth,
            })
          }
        >
          <Text style={styles.navButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>기록하고 싶었던 내용을 적어주세요.</Text>
      <View style={styles.content}>
        <TextInput style={styles.titleInput} placeholder="제목" />
        <TextInput
          style={styles.contentInput}
          placeholder="기록하고 싶은 내용"
          multiline
        />
      </View>
      <View style={styles.tooltipContainer}>
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>
            어떻게 작성할 지 막막하신가요? This is a handy template you can use
            for your apps (as an onboarding tip feature).
          </Text>
        </View>
        <TouchableOpacity style={styles.tooltipButton}>
          <Text style={styles.tooltipButtonText}>✎</Text>
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
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: "#4A90E2",
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    color: "#666666",
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  titleInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  contentInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    height: 200,
    textAlignVertical: "top",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tooltipContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  tooltip: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    padding: 15,
    maxWidth: "80%",
  },
  tooltipText: {
    color: "#FFFFFF",
  },
  tooltipButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 10,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tooltipButtonText: {
    fontSize: 18,
    color: "#4A90E2",
  },
});

export default WriteDiary;
