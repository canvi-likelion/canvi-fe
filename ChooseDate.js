import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";

const backIcon = require("./assets/back.png");

const ChooseDate = ({ navigation, route }) => {
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonbackText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>오늘의 일기</Text>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonnextText}>다음</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>작성하고 싶은 날을 선택해주세요.</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          current={"2023-08-01"}
          monthFormat={"M월"}
          onDayPress={(day) => {
            console.log("selected day", day);
            navigation.navigate("WriteDiary", {
              selectedMonth: day.month,
              selectedDay: day.day,
              selectedDate: day.dateString,
            });
          }}
          theme={{
            arrowColor: "#4A90E2",
            todayTextColor: "#4A90E2",
            selectedDayBackgroundColor: "#4A90E2",
            selectedDayTextColor: "#FFFFFF",
          }}
        />
      </View>
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
  },
  navButton: {
    padding: 10,
  },
  navButtonbackText: {
    fontSize: 13,
    color: "#B8CBF0",
  },
  navButtonnextText: {
    fontSize: 13,
    color: "#6C99F0",
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
    marginBottom: 25,
  },
  calendarContainer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    margin: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default ChooseDate;
