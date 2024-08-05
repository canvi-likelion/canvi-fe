import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const backIcon = require("../assets/back2.png");

const Announcements = ({ navigation }) => {
  const [expanded, setExpanded] = useState(null);

  const handlePress = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.headerText}>공지사항</Text>

      <Text style={styles.myPageSectionTitle}>일기</Text>

      <TouchableOpacity style={styles.infoItem} onPress={() => handlePress(1)}>
        <Text style={styles.infoTitle}>일기 횟수</Text>
        <Icon
          name={expanded === 1 ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color="#A8A8A8"
        />
      </TouchableOpacity>
      {expanded === 1 && (
        <View style={styles.expandedContent}>
          <Text style={styles.infoContent}>
            일기는 하루에 한 번만 작성 가능합니다.{"\n"}매일 소중한 순간을 기록하고, 다음 날 새로운 일기를 시작해보세요.{"\n"}꾸준히 기록하면 더 많은 추억을 남길 수 있어요!
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.infoItem} onPress={() => handlePress(2)}>
        <Text style={styles.infoTitle}>그림 생성</Text>
        <Icon
          name={expanded === 2 ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color="#A8A8A8"
        />
      </TouchableOpacity>
      {expanded === 2 && (
        <View style={styles.expandedContent}>
          <Text style={styles.infoContent}>
            홍길동님, 그림 생성은 하루 3~5회로 제한됩니다.{"\n"}이 점 참고하여 창의적인 기록을 남겨보세요.
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.infoItem} onPress={() => handlePress(3)}>
        <Text style={styles.infoTitle}>채팅</Text>
        <Icon
          name={expanded === 3 ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color="#A8A8A8"
        />
      </TouchableOpacity>
      {expanded === 3 && (
        <View style={styles.expandedContent}>
          <Text style={styles.infoContent}>홍길동님, 채팅 기능은 일기 작성을 돕기 위한 목적으로 제공됩니다.{"\n"}다른 용도로는 사용이 제한되니 양해 부탁드립니다.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  myPageSectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#22215B",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#666666",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  infoTitle: {
    fontSize: 14,
    color: "#666666",
  },
  infoContent: {
    fontSize: 12,
    color: "#22215B",
    paddingVertical: 10,
  },
  expandedContent: {
    paddingHorizontal: 10,
  },
});

export default Announcements;
