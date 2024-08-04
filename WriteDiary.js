import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const backIcon = require('./assets/back.png');

const WriteDiary = ({ navigation, route }) => {
  const { selectedMonth, selectedDay } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            console.log(selectedDay);
            navigation.goBack();
          }}
        >
          <Text style={styles.navButtonbackText}>취소</Text>
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
          <Text style={styles.navButtonnextText}>다음</Text>
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
            어떻게 작성할 지 막막하신가요?
          </Text>
          <Text style={styles.tooltipsubtest}>This is a handy template you can use
          for your apps (as an onboarding tip feature).</Text>
        </View>
        <TouchableOpacity style={styles.tooltipButton} onPress={() => navigation.navigate("MakeDiaryAI")}>
          <Text style={styles.tooltipButtonText}>✎</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingHorizontal: 10,
    alignItems: "center",
  },
  navButton: {
    padding: 20,
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
    color: "#22215B",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    color: "#666666",
    marginBottom: 40,
    fontsize: 13.3,
  },
  content: {
    paddingHorizontal: 20,
  },
  titleInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  contentInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    height: 200,
    textAlignVertical: "top",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  tooltipContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    padding: 20,
  },
  tooltip: {
    backgroundColor: "#6C99F0",
    borderRadius: 15,
    paddingHorizontal: 15,
    maxWidth: "75%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tooltipText: {
    fontsize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom: 5,
  },
  tooltipsubtest: {
    fontSize: 10,
    color: "#ffffff",
    marginBottom: 15,
  },
  tooltipButton: {
    width: 50,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipButtonText: {
    fontSize: 20,
    color: "#4A90E2",
    marginBottom: 5,
  },
});

export default WriteDiary;
