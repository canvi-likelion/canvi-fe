import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import backIcon from "../../assets/back.png";
import mainImage from "../../assets/img/makeNewDiary1.png";
import profileImage from "../../assets/img/profile.png";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const MakeDiary = ({ navigation }) => {
  const handleBackPress = () => navigation.goBack();
  const handleWriteDiaryPress = () => navigation.navigate("ChooseDrawStyle");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={handleBackPress}>
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image source={mainImage} style={styles.mainImage} />
        <Text style={styles.mainTitle}>새로운 일기를 작성해볼까요?</Text>
        <Text style={styles.descriptionText}>
          오늘 하루를 그림으로 기록해볼까요? 작은 순간들도 특별한 추억이 될 수
          있어요.
          {"\n"}당신만의 색깔로 오늘을 표현해보세요. AI가 당신의 이야기를 멋진
          그림으로 만들어줄 거예요.
          {"\n"}지금 시작해보세요!
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleWriteDiaryPress}>
          <Text style={styles.buttonText}>일기 작성하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    justifyContent: "space-between",
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    width: SCREEN_WIDTH,
  },
  mainImage: {
    height: 130,
    marginVertical: 30,
    resizeMode: "contain",
  },
  mainTitle: {
    fontSize: 19.2,
    fontWeight: "bold",
    textAlign: "center",
    color: "#22215B",
    marginVertical: 15,
  },
  descriptionText: {
    fontSize: 9,
    color: "#666666",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    width: 280,
    height: 50,
    backgroundColor: "#6C99F0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  profile: {
    alignItems: "center",
    marginBottom: 80,
  },
  profileImage: {
    width: 80,
    height: 80,
  },
});

export default MakeDiary;
