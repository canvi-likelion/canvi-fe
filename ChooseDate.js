import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";

const ChooseDate = ({ navigation, route }) => {
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>오늘의 일기</Text>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>작성하고 싶은 날을 선택해주세요.</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          current={"2023-08-01"}
          monthFormat={"MMMM yyyy"}
          onDayPress={(day) => {
            console.log("selected day", day);
            navigation.navigate("WriteDiary");
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
  calendarContainer: {
    margin: 20,
    borderRadius: 10,
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
