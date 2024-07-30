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

const MakeDiary = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <ScrollView horizontal pagingEnabled indicatorStyle="white">
        <View style={styles.select}>
          <View style={styles.content}>
            <Image
              source={require("./assets/img/makeNewDiary1.png")}
              style={styles.mainImage}
              resizeMode="contain"
            />
            <Text style={styles.mainTitle}>새로운 일기를 작성해볼까요?</Text>
            <Text style={styles.dateText}>Monday Jan 20, 2020</Text>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              pretium placerat ut platea. Purus blandit integer sagittis massa
              vel est hac.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("ChooseDrawStyle")}
            >
              <Text style={styles.buttonText}>일기 작성하기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.select}>
          <View style={styles.content}>
            <Image
              source={require("./assets/img/makeNewDiary2.png")}
              style={styles.mainImage}
              resizeMode="contain"
            />
            <Text style={styles.mainTitle}>AI 일기를 작성해볼까요?</Text>
            <Text style={styles.dateText}>Monday Jan 20, 2020</Text>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              pretium placerat ut platea. Purus blandit integer sagittis massa
              vel est hac.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AIHelpDiary")}
            >
              <Text style={styles.buttonText}>일기 작성하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.profile}>
        <Image
          source={require("./assets/img/profile.png")}
          style={styles.profileImage}
        />
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
  backButton: {
    margin: 20,
  },
  backButtonText: {
    paddingRight: 1000,
    fontSize: 24,
    color: "#000",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  mainImage: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 0.8,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  dateText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  profile: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  select: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
});

export default MakeDiary;
