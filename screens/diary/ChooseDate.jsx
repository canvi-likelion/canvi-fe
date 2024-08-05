import React, { useState, useMemo, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import { requestApi } from "../../utils/apiSetting";
import Modal from "react-native-modal";
import backIcon from "../../assets/back.png";

const ChooseDate = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNoDateSelectedModalVisible, setIsNoDateSelectedModalVisible] =
    useState(false);
  const reduxUserInfo = useSelector((state) => state.userInfo);
  const today = new Date().toISOString().split("T")[0];

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

  const isNextDisabled = useMemo(() => !selectedDate, [selectedDate]);

  const handleNext = () => {
    if (!isNextDisabled) {
      if (markedDates[selectedDate.dateString]) {
        setIsModalVisible(true);
        return;
      }
      navigation.navigate("WriteDiary", {
        selectedMonth: selectedDate.month,
        selectedDay: selectedDate.day,
        selectedDate: selectedDate.dateString,
      });
    }
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
        <Text style={styles.navTitle}>오늘의 일기</Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={handleNext}
          disabled={isNextDisabled}
        >
          <Text
            style={[
              styles.navButtonnextText,
              isNextDisabled ? styles.disabledText : styles.activeText,
            ]}
          >
            다음
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>작성하고 싶은 날을 선택해주세요.</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          current={today}
          monthFormat={"M월"}
          onDayPress={(day) => {
            setSelectedDate(day);
          }}
          markedDates={{
            ...markedDates,
            ...(selectedDate && {
              [selectedDate.dateString]: {
                selected: true,
                marked: true,
                selectedColor: "#6C99F0",
              },
            }),
          }}
          theme={{
            arrowColor: "#4A90E2",
            todayTextColor: "#4A90E2",
            selectedDayBackgroundColor: "#4A90E2",
            selectedDayTextColor: "#FFFFFF",
          }}
          maxDate={today}
        />
      </View>

      {/* 이미 작성된 일기가 있을 때 */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>이미 작성된 일기가 있어요.</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>다른 날 선택</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* 날짜를 선택하지 않았을 때 */}
      <Modal isVisible={isNoDateSelectedModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>날짜를 선택해주세요.</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsNoDateSelectedModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  calendarContainer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    margin: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  navButton: {
    padding: 20,
  },
  navButtonnextText: {
    fontSize: 13,
  },
  activeText: {
    color: "#6C99F0",
  },
  disabledText: {
    color: "#B8CBF0",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    margin: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#22215B",
  },
  closeButtonText: {
    color: "#666666",
    fontSize: 13,
    marginBottom: 3,
  },
});

export default ChooseDate;
