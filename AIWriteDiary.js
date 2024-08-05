import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { requestApi } from "./utils/apiSetting";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const backIcon = require("./assets/back.png");

const AIWriteDiary = ({ navigation, route }) => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);
  const reduxUserInfo = useSelector((state) => state.userInfo);
  const { selectedMonth, selectedDay, selectedDate, subject } = route.params;

  useEffect(() => {
    setMessages([{ type: "gpt", text: subject }]);
  }, [subject]);

  const handleSend = () => {
    if (prompt.trim()) {
      setMessages([...messages, { type: "user", text: prompt }]);
      setIsLoading(true);

      requestApi
        .post("/api/gpt", {
          username: reduxUserInfo.userName,
          prompt: prompt,
        })
        .then((res) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: "gpt", text: res.data.data.gptResult },
          ]);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          setPrompt("");
          flatListRef.current.scrollToEnd({ animated: true });
        });
    }
  };

  const handleSaveDiary = () => {
    const firstGptQuestion = messages.find((msg) => msg.type === "gpt");

    const lastGptResponse = messages.reverse().find((msg) => msg.type === "gpt");

    if (firstGptQuestion && lastGptResponse) {
      requestApi
        .post(
          "/diaries",
          {
            title: firstGptQuestion.text,
            content: lastGptResponse.text,
            diaryDate: selectedDate,
          },
          {
            headers: {
              Authorization: `Bearer ${reduxUserInfo.accessToken}`,
            },
          }
        )
        .then(() => {
          navigation.navigate("ShowDiary", {
            selectedMonth,
            selectedDay,
            title: firstGptQuestion.text,
            content: lastGptResponse.text,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.speechBubble,
        item.type === "user" ? styles.speechBubbleGray : styles.speechBubbleBlue,
      ]}
    >
      <Text style={styles.bubbleText}>{item.text}</Text>
    </View>
  );

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
        <Text style={styles.navTitle}>도와드릴게요.</Text>
        <TouchableOpacity style={styles.navButton} onPress={handleSaveDiary}>
          <Text style={styles.navButtonnextText}>생성</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>같이 작성해보아요.</Text>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.chatContent}
          onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        />

        {isLoading && (
          <ActivityIndicator size="small" color="#6C99F0" style={styles.loader} />
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="메시지를 입력하세요..."
            value={prompt}
            onChangeText={setPrompt}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    marginBottom: 20,
  },
  chatContent: {
    padding: 20,
    paddingve: 10,
  },
  speechBubble: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    maxWidth: "80%",
  },
  speechBubbleGray: {
    backgroundColor: "#6C99F0",
    alignSelf: "flex-end",
  },
  speechBubbleBlue: {
    backgroundColor: "#9F9EA1",
    alignSelf: "flex-start",
  },
  bubbleText: {
    color: "#FFFFFF",
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
