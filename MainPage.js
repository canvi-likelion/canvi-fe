import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { Calendar } from "react-native-calendars";
import { createStackNavigator } from "@react-navigation/stack";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Stack = createStackNavigator();

const MainPage = ({ navigation }) => {
  const reduxUserInfo = useSelector((state) => state.userInfo);
  const [selectedTab, setSelectedTab] = useState("홈");

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {selectedTab === "홈" && (
          <>
            <View style={styles.header}>
              <Image
                source={require("./assets/img/profile.png")}
                style={styles.profileImage}
              />
              <Text style={styles.headerText}>{reduxUserInfo.userName}님,</Text>
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
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={styles.blogScrollContainer}
            >
              <View style={styles.blogCard}>
                <Image
                  source={require("./assets/img/mainPageCard.png")}
                  style={styles.blogImage}
                />
                <Text style={styles.blogTitle}>
                  어제의 {reduxUserInfo.userName}님은?
                </Text>
                <Text style={styles.blogDate}>Monday Jan 20, 2020</Text>
                <Text style={styles.blogContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare pretium placerat ut platea. Purus blandit integer
                  sagittis massa vel est hac.
                </Text>
                <TouchableOpacity style={styles.readBlogButton}>
                  <Text style={styles.readBlogButtonText}>Read Full Blog</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.blogCard}>
                <Image
                  source={require("./assets/img/mainPageCard.png")}
                  style={styles.blogImage}
                />
                <Text style={styles.blogTitle}>
                  어제의 {reduxUserInfo.userName}님은?
                </Text>
                <Text style={styles.blogDate}>Monday Jan 20, 2020</Text>
                <Text style={styles.blogContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare pretium placerat ut platea. Purus blandit integer
                  sagittis massa vel est hac.
                </Text>
                <TouchableOpacity style={styles.readBlogButton}>
                  <Text style={styles.readBlogButtonText}>Read Full Blog</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        )}
        {selectedTab === "캘린더" && (
          <View style={styles.calendarView}>
            <View style={styles.calendarHeader}>
              <Image
                source={require("./assets/img/profile.png")}
                style={styles.calendarProfileImage}
              />
              <View>
                <Text style={styles.calendarHeaderText}>
                  {reduxUserInfo.userName}님,
                </Text>
                <Text style={styles.calendarSubHeaderText}>
                  그 날의 일기를 볼 수 있어요.
                </Text>
              </View>
            </View>
            <View style={styles.calendarContainer}>
              <Calendar
                style={styles.calendar}
                theme={{
                  arrowColor: "#4A90E2",
                  todayTextColor: "#4A90E2",
                  selectedDayBackgroundColor: "#4A90E2",
                  selectedDayTextColor: "#ffffff",
                }}
                markedDates={{
                  "2023-07-16": {
                    selected: true,
                    marked: true,
                    selectedColor: "#4A90E2",
                  },
                }}
              />
            </View>
          </View>
        )}
        {selectedTab === "마이페이지" && (
          <View style={styles.myPageView}>
            <View style={styles.myPageHeader}>
              <Image
                source={require("./assets/img/profile.png")}
                style={styles.myPageProfileImage}
              />
              <Text style={styles.myPageHeaderText}>
                {reduxUserInfo.userName}님,
              </Text>
              <Text style={styles.myPageSubHeaderText}>
                오늘도 멋진 하루를 만들어봐요!
              </Text>
            </View>
            <View style={styles.myPageInfoContainer}>
              <Text style={styles.myPageSectionTitle}>내 정보</Text>
              <TouchableOpacity
                style={styles.myPageItem}
                onPress={() => navigation.navigate("UserInfo")}
              >
                <Text style={styles.myPageItemText}>
                  {reduxUserInfo.userName}님
                </Text>
                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  color="#A8A8A8"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.myPageSettingsContainer}>
              <Text style={styles.myPageSectionTitle}>설정</Text>
              <TouchableOpacity
                style={styles.myPageItem}
                onPress={() => navigation.navigate("Announcements")}
              >
                <Text style={styles.myPageItemText}>공지사항</Text>
                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  color="#A8A8A8"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.myPageItem}>
                <Text style={styles.myPageItemText}>앱설정</Text>
                <Icon
                  name="chevron-forward-outline"
                  size={20}
                  color="#A8A8A8"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.myPageFooter}>
              <TouchableOpacity>
                <Text style={styles.myPageFooterText}>로그아웃</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.myPageFooterText}>탈퇴하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => handleTabPress("홈")}
        >
          <Icon
            name="home-outline"
            size={30}
            color={selectedTab === "홈" ? "#4A90E2" : "#A8A8A8"}
          />
          <Text
            style={[
              styles.footerText,
              selectedTab === "홈" && styles.activeText,
            ]}
          >
            홈
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => handleTabPress("캘린더")}
        >
          <Icon
            name="calendar-outline"
            size={30}
            color={selectedTab === "캘린더" ? "#4A90E2" : "#A8A8A8"}
          />
          <Text
            style={[
              styles.footerText,
              selectedTab === "캘린더" && styles.activeText,
            ]}
          >
            캘린더
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => handleTabPress("마이페이지")}
        >
          <Icon
            name="person-outline"
            size={30}
            color={selectedTab === "마이페이지" ? "#4A90E2" : "#A8A8A8"}
          />
          <Text
            style={[
              styles.footerText,
              selectedTab === "마이페이지" && styles.activeText,
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
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  blogScrollContainer: {
    marginTop: 20,
  },
  blogCard: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: SCREEN_WIDTH * 0.8,
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
  readBlogButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  readBlogButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  calendarView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  calendarHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  calendarProfileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  calendarHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  calendarSubHeaderText: {
    fontSize: 16,
    color: "#666666",
  },
  calendarContainer: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: "100%",
  },
  myPageView: {
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
  myPageHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  myPageProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  myPageHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  myPageSubHeaderText: {
    fontSize: 14,
    color: "#666666",
  },
  myPageInfoContainer: {
    marginBottom: 20,
  },
  myPageSectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#AAAAAA",
    marginBottom: 10,
  },
  myPageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  myPageItemText: {
    fontSize: 16,
    color: "#4A90E2",
  },
  myPageSettingsContainer: {
    marginBottom: 20,
  },
  myPageFooter: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  myPageFooterText: {
    fontSize: 14,
    color: "#4A90E2",
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#F8F8F8",
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 20,
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
