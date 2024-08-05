import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const backIcon = require("../../../assets/back2.png");

const ChangePasswordStep3 = ({ navigation }) => {
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={backIcon} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.headerText}>내 정보</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>새로운 비밀번호</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholder="다시 한 번 새로운 비밀번호를 입력해 주세요."
        />
        <TouchableOpacity onPress={() => setConfirmPassword("")}>
          <Icon name="close-circle-outline" size={20} color="#A8A8A8" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Handle password change */
        }}
      >
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>비밀번호 변경하기</Text>
      </TouchableOpacity>
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#22215B",
    margin: 10,
  },
  input: {
    fontSize: 12,
    color: "#666666",
  },
  button: {
    backgroundColor: "#6C99F0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ChangePasswordStep3;
