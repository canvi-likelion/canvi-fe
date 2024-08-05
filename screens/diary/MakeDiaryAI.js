import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const backIcon = require("../../assets/back.png");

const MakeDiaryAI = ({ navigation, route }) => {
  const { selectedDay, selectedMonth, selectedDate } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.select}>
        <View style={styles.content}>
          <Image
            source={require("../../assets/img/makeNewDiary2.png")}
            style={styles.mainImage}
            resizeMode="contain"
          />
          <Text style={styles.mainTitle}>AI와 함께 일기를 작성해보아요!</Text>
          <Text style={styles.descriptionText}>
            AI와 함께 오늘의 특별한 순간을 기록해보세요.{"\n"}그림과 글로 당신의
            이야기를 생생하게 담아드립니다.{"\n"}AI가 당신의 기억을 아름다운
            작품으로 만들어줄 거예요.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("AIHelpDiary", {
                selectedMonth: selectedMonth,
                selectedDay: selectedDay,
                selectedDate: selectedDate,
              })
            }
          >
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profile}>
        <Image
          source={require("../../assets/img/profile.png")}
          style={styles.profileImage}
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
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  mainImage: {
    height: 130,
    marginVertical: 30,
  },
  mainTitle: {
    fontSize: 19.2,
    fontWeight: "bold",
    textAlign: "center",
    color: "#22215B",
    marginVertical: 15,
  },
  descriptionText: {
    fontSize: 8.96,
    color: "#666666",
    textAlign: "center",
    marginBottom: 50,
  },
  nextbutton: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    width: 280,
    height: 50,
    backgroundColor: "#6C99F0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  profile: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    marginBottom: 60,
  },
  select: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    marginBottom: 50,
  },
});

export default MakeDiaryAI;
