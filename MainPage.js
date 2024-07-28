import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const MainPage = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileCard}>
          <Image
            source={require("./assets/img/profile.png")}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>홍길동님,</Text>
            <Text style={styles.subHeaderText}>
              오늘의 하루도 기록해볼까요?
            </Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => navigation.navigate("MakeDiary")}
            >
              <Text style={styles.startButtonText}>Let's Start</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.blogCard}>
          <Image
            source={require("./assets/img/mainPageCard.png")}
            style={styles.blogImage}
          />
          <Text style={styles.blogTitle}>어제의 홍길동님은?</Text>
          <Text style={styles.blogDate}>Monday Jan 20, 2020</Text>
          <Text style={styles.blogContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            pretium placerat ut platea. Purus blandit integer sagittis massa vel
            est hac.
          </Text>
          <TouchableOpacity style={styles.blogButton} onPress={() => {}}>
            <Text style={styles.blogButtonText}>Read Full Blog</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setSelectedTab("home")}
        >
          <Icon
            name="home-outline"
            size={30}
            color={selectedTab === "home" ? "#4A90E2" : "#A8A8A8"}
          />
          <Text
            style={[
              styles.footerText,
              selectedTab === "home" && styles.activeText,
            ]}
          >
            홈
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setSelectedTab("calendar")}
        >
          <Icon
            name="calendar-outline"
            size={30}
            color={selectedTab === "calendar" ? "#4A90E2" : "#A8A8A8"}
          />
          <Text
            style={[
              styles.footerText,
              selectedTab === "calendar" && styles.activeText,
            ]}
          >
            캘린더
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setSelectedTab("mypage")}
        >
          <Icon
            name="person-outline"
            size={30}
            color={selectedTab === "mypage" ? "#4A90E2" : "#A8A8A8"}
          />
          <Text
            style={[
              styles.footerText,
              selectedTab === "mypage" && styles.activeText,
            ]}
          >
            마이페이지
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  profileCard: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    margin: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#666666",
  },
  startButton: {
    marginTop: 10,
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  blogCard: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  blogImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  blogDate: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },
  blogContent: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },
  blogButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  blogButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  iconContainer: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#A8A8A8",
    marginTop: 5,
  },
  activeText: {
    color: "#4A90E2",
  },
});

export default MainPage;
