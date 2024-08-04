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
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <Text style={styles.mainTitle}>도와드릴게요.</Text>
      <Text style={styles.subtitle}>같이 작성해보아요.</Text>
      <View style={styles.chatContainer}>
        <View style={styles.speechBubbleGray}>
          <Text style={styles.bubbleTextBold}>New feature!</Text>
          <Text style={styles.bubbleText}>
            This is a handy template you can use for your apps (as an onboarding
            tip feature for instance). Feel free to resize it, change colors,
            and modify the arrow position.
          </Text>
        </View>
        <View style={styles.speechBubbleBlue}>
          <Text style={styles.bubbleTextBold}>New feature!</Text>
          <Text style={styles.bubbleText}>
            This is a handy template you can use for your apps (as an onboarding
            tip feature for instance). Feel free to resize it, change colors,
            and modify the arrow position.
          </Text>
        </View>
        <View style={styles.speechBubbleGray}>
          <Text style={styles.bubbleTextBold}>New feature!</Text>
          <Text style={styles.bubbleText}>
            This is a handy template you can use for your apps (as an onboarding
            tip feature for instance).
          </Text>
        </View>
      </View>
      {/* <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate("AICompleteDiary")}
      > */}
      {isLoading && (
        <ActivityIndicator size="small" color="#6C99F0" style={styles.loader} />
      )}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {
          handleGenerateText();
        }}
        disabled={isLoading}
      >
        <Text style={styles.createButtonText}>생성하기</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your prompt"
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
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
    marginBottom: 20,
  },
  chatContainer: {
    flex: 1,
    justifyContent: "flex-start",
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
  createButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
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
    backgroundColor: "#4A90E2",
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
