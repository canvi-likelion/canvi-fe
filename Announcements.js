import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Announcements = ({ navigation }) => {
  const [expanded, setExpanded] = useState(null);

  const handlePress = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={25} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>공지사항</Text>
      <TouchableOpacity style={styles.infoItem} onPress={() => handlePress(1)}>
        <Text style={styles.infoTitle}>일기</Text>
        <Icon
          name={expanded === 1 ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color="#A8A8A8"
        />
      </TouchableOpacity>
      {expanded === 1 && (
        <View style={styles.expandedContent}>
          <Text style={styles.infoContent}>
            일기는 하루에 한 번만 작성 가능합니다. 매일 소중한 순간을 기록하고,
            다음 날 새로운 일기를 시작해보세요. 꾸준히 기록하면 더 많은 추억을
            남길 수 있어요!
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
            그림 생성에 대한 안내 내용입니다.
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
          <Text style={styles.infoContent}>채팅에 대한 안내 내용입니다.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  infoTitle: {
    fontSize: 16,
    color: "#4A90E2",
  },
  infoContent: {
    fontSize: 14,
    color: "#666666",
    paddingVertical: 10,
  },
  expandedContent: {
    paddingHorizontal: 10,
  },
});

export default Announcements;
