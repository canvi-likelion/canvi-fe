import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ChangePasswordStep3 = ({ navigation }) => {
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={25} color="#000" />
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
        <Text style={styles.buttonText}>비밀번호 변경하기</Text>
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  label: {
    fontSize: 16,
    color: "#4A90E2",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#666666",
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ChangePasswordStep3;
