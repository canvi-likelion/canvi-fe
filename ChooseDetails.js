import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { requestApi } from "./utils/apiSetting";
import { useSelector } from "react-redux";

const backIcon = require("./assets/back.png");

const ChooseDetails = ({ navigation, route }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedHairStyle, setSelectedHairStyle] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const reduxUserInfo = useSelector((state) => state.userInfo);
  const { selectedDay, selectedMonth, selectedDate, title, content } =
    route.params; // Access the passed date parameter

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, inputText.trim()]);
      setInputText("");
    }
  };

  const handleDiary = () => {
    requestApi
      .post(
        "/diaries",
        {
          title: title,
          content: content,
          diaryDate: selectedDate,
        },
        {
          headers: {
            Authorization: `Bearer ${reduxUserInfo.accessToken}`,
          },
        }
      )
      .then((res) => {
        navigation.navigate("ShowDiary", {
          selectedDay,
          selectedMonth,
          selectedDate,
          title,
          content,
        });
      })
      .catch((err) => {
        console.log(err, "hi");
      });
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
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonbackText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>
          {selectedMonth}월 {selectedDay}일의 일기
        </Text>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonnextText} onPress={() => handleDiary()}>
            생성
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>세부 정보를 선택해주세요.</Text>
      <View style={styles.selectionContainer}>
        <Text style={styles.selectionTitle}>성별</Text>
        <View style={styles.selectionRow}>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedGender === "female" && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender("female")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedGender === "female" && styles.selectedButtonText,
              ]}
            >
              # 여성
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedGender === "male" && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender("male")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedGender === "male" && styles.selectedButtonText,
              ]}
            >
              # 남성
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.selectionTitle}>머리 스타일</Text>
        <View style={styles.selectionRow}>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedHairStyle === "short" && styles.selectedButton,
            ]}
            onPress={() => setSelectedHairStyle("short")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedHairStyle === "short" && styles.selectedButtonText,
              ]}
            >
              # 숏 컷
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedHairStyle === "bob" && styles.selectedButton,
            ]}
            onPress={() => setSelectedHairStyle("bob")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedHairStyle === "bob" && styles.selectedButtonText,
              ]}
            >
              # 단발
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedHairStyle === "medium" && styles.selectedButton,
            ]}
            onPress={() => setSelectedHairStyle("medium")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedHairStyle === "medium" && styles.selectedButtonText,
              ]}
            >
              # 중간 길이
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedHairStyle === "long" && styles.selectedButton,
            ]}
            onPress={() => setSelectedHairStyle("long")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedHairStyle === "long" && styles.selectedButtonText,
              ]}
            >
              # 장발
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.messageContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              { alignSelf: "flex-end", backgroundColor: "#4A90E2" },
            ]}
          >
            <Text style={[styles.messageText, { color: "#FFF" }]}>
              {message}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="착장을 간단하게 입력해주시면 좋아요."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon name="send" size={20} color="#FFF" />
        </TouchableOpacity>
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
    marginTop: 10,
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
    marginTop: 5,
  },
  selectionContainer: {
    paddingHorizontal: 20,
  },
  selectionTitle: {
    fontSize: 13.3,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#CFCFCF",
  },
  selectionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  selectionButton: {
    width: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
    marginHorizontal: 10,
  },
  selectedButton: {
    backgroundColor: "#6C99F0",
  },
  selectionButtonText: {
    color: "#666666",
    marginBottom: 3,
  },
  selectedButtonText: {
    color: "#FFFFFF",
  },
  messageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageBubble: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sendButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 20,
    padding: 10,
  },
  footerText: {
    textAlign: "center",
    color: "#666666",
    marginBottom: 20,
  },
});

export default ChooseDetails;
