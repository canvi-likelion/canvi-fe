import React, { useState, useEffect } from "react";
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
import { requestApi } from "../utils/apiSetting";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

import icon from "../assets/icon.png";
import checkicon from "../assets/checkicon.png";
import ex1 from "../assets/ex/ex1.png";
import ex2 from "../assets/ex/ex2.png";
import ex3 from "../assets/ex/ex3.png";
import profileImage from "../assets/img/profile.png";

const MainPage = ({ navigation }) => {
  const reduxUserInfo = useSelector((state) => state.userInfo);
  const today = new Date().toISOString().split("T")[0];
  const [selectedTab, setSelectedTab] = useState("홈");
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    requestApi
      .get("/diaries", {
        headers: {
          Authorization: `Bearer ${reduxUserInfo.accessToken}`,
        },
      })
      .then((res) => {
        const diaryList = res.data.result.diaryGetResponseList;
        const markedDatesTemp = {};

        diaryList.forEach((diary) => {
          markedDatesTemp[diary.date] = {
            marked: true,
            dotColor: "#6C99F0",
          };
        });

        setMarkedDates(markedDatesTemp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reduxUserInfo.accessToken]);

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topheader}>
        <Image source={icon} style={styles.icon} />
        <Image source={checkicon} style={styles.checkicon} />
      </View>
      <View style={styles.scrollContainer}>
        {selectedTab === "홈" && (
          <>
            <View style={styles.header}>
              <View style={styles.userinform}>
                <Image source={profileImage} style={styles.profileImage} />
                <View style={styles.textbox}>
                  <Text style={styles.headerText}>
                    {reduxUserInfo.userName}님,
                  </Text>
                  <Text style={styles.subHeaderText}>
                    오늘의 하루도 기록해볼까요?
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => navigation.navigate("MakeDiary")}
              >
                <Text style={styles.startButtonText}>Let&#39;s Start</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={styles.blogScrollContainer}
              contentContainerStyle={styles.blogScrollContent}
              snapToInterval={SCREEN_WIDTH * 0.85 + 13}
              decelerationRate="fast"
            >
              <View style={styles.blogCard}>
                <Image source={ex1} style={styles.blogImage} />
                <Text style={styles.blogTitle}>
                  엊그제 {reduxUserInfo.userName}님은?
                </Text>
                <Text style={styles.blogDate}>월요일 8월 5일, 2024</Text>
                <Text style={styles.blogContent}>
                  엊그제 {reduxUserInfo.userName}님은 도심 속 숨겨진 공원을
                  발견했습니다.{"\n"}낯선 길에서 마주친 멋진 풍경과 새 친구를
                  사귀었어요.{"\n"}저녁에는 저녁 노을을 보며 하루의 피로를
                  날렸습니다.
                </Text>
                <View style={styles.readcontainer}>
                  <Text style={styles.readcontainertext}>
                    엊그제 일기를 다시 읽어보세요.
                  </Text>
                  <TouchableOpacity style={styles.readBlogButton}>
                    <Text style={styles.readBlogButtonText}>HAMA</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.blogCard}>
                <Image source={ex2} style={styles.blogImage} />
                <Text style={styles.blogTitle}>
                  어제의 {reduxUserInfo.userName}님은?
                </Text>
                <Text style={styles.blogDate}>화요일 8월 6일, 2024</Text>
                <Text style={styles.blogContent}>
                  어제의 {reduxUserInfo.userName}님은 바쁜 일상 속에서도 소소한
                  행복을 찾았습니다.{"\n"}평소와 다른 길로 돌아가는 산책에서
                  새로운 영감을 얻었어요.{"\n"}마지막엔 좋아하는 카페에서 달콤한
                  디저트로 하루를 완성했습니다.
                </Text>
                <View style={styles.readcontainer}>
                  <Text style={styles.readcontainertext}>
                    어제 일기를 다시 읽어보세요.
                  </Text>
                  <TouchableOpacity style={styles.readBlogButton}>
                    <Text style={styles.readBlogButtonText}>HAMA</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.blogCard}>
                <Image source={ex3} style={styles.blogImage} />
                <Text style={styles.blogTitle}>
                  사흘 전 {reduxUserInfo.userName}님은?
                </Text>
                <Text style={styles.blogDate}>일요일 8월 4일, 2024</Text>
                <Text style={styles.blogContent}>
                  사흘 전 {reduxUserInfo.userName}님은 새로운 카페를
                  탐방했습니다.{"\n"}이국적인 분위기와 독특한 메뉴를 즐겼어요.
                  {"\n"}저녁에는 친구들과 함께 새로운 맛집을 찾아가 대화를
                  나눴습니다.
                </Text>
                <View style={styles.readcontainer}>
                  <Text style={styles.readcontainertext}>
                    사흘 전 일기를 다시 읽어보세요.
                  </Text>
                  <TouchableOpacity style={styles.readBlogButton}>
                    <Text style={styles.readBlogButtonText}>HAMA</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </>
        )}

        {selectedTab === "캘린더" && (
          <View style={styles.calendarView}>
            <View style={styles.calendarHeader}>
              <Image
                source={profileImage}
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
                monthFormat={"M월"}
                style={styles.calendar}
                maxDate={today}
                onDayPress={(day) => {
                  requestApi
                    .get("/diaries", {
                      headers: {
                        Authorization: `Bearer ${reduxUserInfo.accessToken}`,
                      },
                    })
                    .then((res) => {
                      const diaryList = res.data.result.diaryGetResponseList;
                      const targetDate = day.dateString;

                      const findDiaryByDate = (diaryList, targetDate) => {
                        for (let i = 0; i < diaryList.length; i++) {
                          if (diaryList[i].date == targetDate) {
                            return diaryList[i];
                          }
                        }
                        return null; // 일치하는 항목이 없는 경우
                      };

                      const matchingDiary = findDiaryByDate(
                        diaryList,
                        targetDate
                      );
                      if (matchingDiary) {
                        navigation.navigate("ShowDiary", {
                          title: matchingDiary.title,
                          content: matchingDiary.content,
                          selectedMonth: day.month,
                          selectedDay: day.day,
                          selectedDate: day.dateString,
                        });
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                theme={{
                  arrowColor: "#4A90E2",
                  todayTextColor: "#4A90E2",
                  selectedDayBackgroundColor: "#4A90E2",
                  selectedDayTextColor: "#ffffff",
                }}
                markedDates={markedDates} // 저장된 일기의 날짜 표시
              />
            </View>
          </View>
        )}

        {selectedTab === "마이페이지" && (
          <View style={styles.myPageView}>
            <View style={styles.myPageHeader}>
              <Image source={profileImage} style={styles.myPageProfileImage} />
              <Text style={styles.myPageHeaderText}>
                {reduxUserInfo.userName}
                <Text style={styles.myPageSubHeaderText}> 님,</Text>
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
                  size={18}
                  color="#22215B"
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
                  size={18}
                  color="#22215B"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.myPageItem}>
                <Text style={styles.myPageItemText}>앱설정</Text>
                <Icon
                  name="chevron-forward-outline"
                  size={18}
                  color="#22215B"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.myPageFooter}>
              <TouchableOpacity>
                <Text style={styles.myPageFooterText}>로그아웃</Text>
              </TouchableOpacity>
              <Text style={styles.myPageFooterText}>|</Text>
              <TouchableOpacity>
                <Text style={styles.myPageFooterText}>탈퇴하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => handleTabPress("홈")}
        >
          <Icon
            name="home-outline"
            size={28}
            color={selectedTab === "홈" ? "#6C99F0" : "#B9B9B9"}
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
            size={28}
            color={selectedTab === "캘린더" ? "#6C99F0" : "#B9B9B9"}
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
            size={28}
            color={selectedTab === "마이페이지" ? "#6C99F0" : "#B9B9B9"}
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
  topheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  checkicon: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  userinform: {
    flexDirection: "row",
    marginBottom: 15,
  },
  header: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 15,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  textbox: {
    justifyContent: "center",
  },
  headerText: {
    color: "#22215B",
    fontSize: 18.84,
    fontWeight: "bold",
    marginBottom: 3,
  },
  subHeaderText: {
    fontSize: 13.3,
    color: "#666666",
    marginBottom: 5,
  },
  startButton: {
    backgroundColor: "#6C99F0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16.49,
    fontWeight: "bold",
  },
  blogScrollContainer: {
    marginTop: 10,
  },
  blogScrollContent: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  blogCard: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    borderRadius: 15,
    width: SCREEN_WIDTH * 0.85,
    height: "auto",
    justifyContent: "space-between",
  },
  blogImage: {
    width: "100%",
    height: 180,
    borderRadius: 20,
    marginBottom: 10,
  },
  blogTitle: {
    fontSize: 19.2,
    fontWeight: "bold",
    color: "#22215B",
    marginBottom: 10,
  },
  blogDate: {
    fontSize: 8.96,
    color: "#22215B",
    marginBottom: 10,
  },
  blogContent: {
    fontSize: 10,
    color: "#666666",
    marginBottom: 10,
  },
  readcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  readcontainertext: {
    fontSize: 8.96,
    fontWeight: "bold",
  },
  readBlogButton: {
    backgroundColor: "#EEF7FE",
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 25,
  },
  readBlogButtonText: {
    color: "#22215B",
    fontSize: 8.96,
    fontWeight: "bold",
    marginTop: 6,
  },
  calendarView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
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
    width: 65,
    height: 65,
    marginRight: 15,
  },
  calendarHeaderText: {
    fontSize: 18.84,
    fontWeight: "bold",
    color: "#22215B",
    marginBottom: 3,
  },
  calendarSubHeaderText: {
    fontSize: 13.3,
    color: "#666666",
    marginBottom: 5,
  },
  calendarContainer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  myPageView: {
    marginHorizontal: 20,
  },
  myPageHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  myPageProfileImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  myPageHeaderText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#6C99F0",
  },
  myPageSubHeaderText: {
    fontSize: 15,
    color: "#22215B",
    fontWeight: "bold",
  },
  myPageInfoContainer: {
    marginBottom: 20,
  },
  myPageSectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#AAAAAA",
    margin: 10,
  },
  myPageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  myPageItemText: {
    fontSize: 15,
    color: "#22215B",
    fontWeight: "bold",
    marginBottom: 10,
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
    fontSize: 12,
    color: "#666666",
    marginHorizontal: 10,
    marginTop: 110,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 70,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 10,
    color: "#B9B9B9",
    marginTop: 5,
  },
  activeText: {
    color: "#4A90E2",
  },
});

export default MainPage;
