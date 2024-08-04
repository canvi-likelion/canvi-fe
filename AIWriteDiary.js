import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { requestApi } from "./utils/apiSetting";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const backIcon = require("./assets/back.png");

const AIWriteDiary = ({ navigation, route }) => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const reduxUserInfo = useSelector((state) => state.userInfo);
  const { selectedMonth, selectedDay, selectedDate } = route.params;

  const handleGenerateText = () => {
    setIsLoading(true);
    requestApi
      .post("/api/gpt", {
        username: reduxUserInfo.userName,
        prompt: prompt,
      })
      .then((res) => {
        console.log(res.data.data.gptResult);
        navigation.navigate("AICompleteDiary", {
          gptResult: res.data.data.gptResult,
          selectedMonth: selectedMonth,
          selectedDay: selectedDay,
          selectedDate: selectedDate,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
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
        <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
          <Text style={styles.navButtonbackText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>도와드릴게요.</Text>
      </View>

      <Text style={styles.subtitle}>
        같이 작성해보아요.
      </Text>

      <View style={styles.chatContainer}>
      </View>
      {isLoading && (
        <ActivityIndicator size="small" color="#6C99F0" style={styles.loader} />
      )}

      <View style={styles.buttoncontainer}>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {
          handleGenerateText();
        }}
        disabled={isLoading}
      >
        <Text style={styles.createButtonText}>생성하기</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="tex.."
          value={prompt}
          onChangeText={setPrompt}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>➤</Text>
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
  chatContainer: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 20,
  },
  speechBubbleGray: {
    backgroundColor: "#C4C4C4",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  speechBubbleBlue: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "flex-end",
  },
  bubbleTextBold: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubbleText: {
    color: "#FFFFFF",
  },
  buttoncontainer: {
    alignItems: "center",
  },
  createButton: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    width: 120,
  },
  createButtonText: {
    color: "#6C99F0",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#6C99F0",
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  loader: {
    marginTop: 10,
  },
});

export default AIWriteDiary;
