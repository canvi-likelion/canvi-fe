import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import backIcon from "../../assets/back2.png";

const UserInfo = ({ navigation }) => {
  const { userName, email } = useSelector((state) => state.userInfo);

  const renderInfoItem = (title, content, onPress, showArrow = false) => (
    <>
      <Text style={styles.myPageSectionTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.myPageItem}
        onPress={onPress}
        disabled={!onPress}
      >
        <Text style={styles.myPageItemText}>{content}</Text>
        {showArrow && (
          <Icon
            name="chevron-forward-outline"
            size={18}
            color="#666666"
          />
        )}
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.headerText}>내 정보</Text>

      <View style={styles.myPageInfoContainer}>
        {renderInfoItem("이름", userName, () => navigation.navigate("EditName"), true)}
        {renderInfoItem("이메일", email)}
        {renderInfoItem("비밀번호 변경", "********", () => navigation.navigate("ChangePasswordStep1"), true)}
      </View>
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
  },
  infoTitle: {
    fontSize: 16,
    color: "#4A90E2",
  },
  infoContent: {
    fontSize: 16,
    color: "#666666",
  },
  myPageInfoContainer: {
    marginBottom: 20,
  },
  myPageSectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#22215B",
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
    color: "#666666",
    fontWeight: "bold",
    marginBottom: 10,
  },
  myPageSettingsContainer: {
    marginBottom: 20,
  },
});

export default UserInfo;
