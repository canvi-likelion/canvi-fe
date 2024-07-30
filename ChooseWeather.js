import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ChooseWeather = ({ navigation, route }) => {
  const { selectedDay, selectedMonth } = route.params; // Access the passed date parameter
  const [selectedWeather, setSelectedWeather] = useState(null);

  const weatherIcons = [
    "weather-sunny",
    "weather-partly-cloudy",
    "weather-cloudy",
    "weather-rainy",
    "weather-pouring",
    "weather-snowy",
    "weather-fog",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>
          {selectedMonth}월 {selectedDay}일의 일기
        </Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() =>
            navigation.navigate("ChooseDetails", {
              selectedDay: selectedDay,
              selectedMonth: selectedMonth,
              selectedWeather: selectedWeather, // Pass the selected weather
            })
          }
        >
          <Text style={styles.navButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>그 날의 날씨는 어땠나요?</Text>
      <View style={styles.weatherContainer}>
        {weatherIcons.map((iconName, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedWeather(iconName)}
            style={[
              styles.weatherIconContainer,
              selectedWeather === iconName &&
                styles.selectedWeatherIconContainer,
            ]}
          >
            <Icon
              name={iconName}
              size={30}
              color={selectedWeather === iconName ? "#4A90E2" : "#666"}
              style={styles.weatherIcon}
            />
          </TouchableOpacity>
        ))}
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
  weatherContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  selectedWeatherIconContainer: {
    borderColor: "#4A90E2",
  },
  weatherIcon: {
    marginHorizontal: 10,
  },
});

export default ChooseWeather;
