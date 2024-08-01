import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

const UserInfo = ({ navigation }) => {
  const reduxUserInfo = useSelector((state) => state.userInfo);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={25} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>내 정보</Text>
      <TouchableOpacity
        style={styles.infoItem}
        onPress={() => navigation.navigate("EditName")}
      >
        <Text style={styles.infoTitle}>이름</Text>
        <Text style={styles.infoContent}>{reduxUserInfo.userName}</Text>
        <Icon name="chevron-forward-outline" size={20} color="#A8A8A8" />
      </TouchableOpacity>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>이메일</Text>
        <Text style={styles.infoContent}>wowwow1234@gmail.com</Text>
      </View>
      <TouchableOpacity
        style={styles.infoItem}
        onPress={() => navigation.navigate("ChangePasswordStep1")}
      >
        <Text style={styles.infoTitle}>비밀번호 변경</Text>
        <Text style={styles.infoContent}>********</Text>
        <Icon name="chevron-forward-outline" size={20} color="#A8A8A8" />
      </TouchableOpacity>
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
    fontSize: 16,
    color: "#666666",
  },
});

export default UserInfo;
