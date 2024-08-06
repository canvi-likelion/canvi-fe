import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { requestApi } from "../../../utils/apiSetting";
import backIcon from "../../../assets/back.png";
import Modal from "react-native-modal";

const SignupScreenEmail = ({ navigation }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const reduxRegisterInfo = useSelector((state) => state.registerInfo);

  const validationPassword = () => {
    const password = reduxRegisterInfo.password;
    if (password === inputPassword) {
      requestApi
        .post("/api/auth/signup", {
          username: reduxRegisterInfo.userName,
          email: reduxRegisterInfo.email,
          password: password,
        })
        .then((res) => {
          navigation.navigate("SignupOK");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setModalMessage("비밀번호가 일치하지 않습니다.");
      setIsModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}
        >
          <Image source={backIcon} style={styles.icon} />
          <Text style={styles.backButton}>계정 생성하기</Text>
        </TouchableOpacity>
        <View style={styles.stepIndicatorContainer}>
          <View style={styles.stepIndicatorActive} />
          <View style={styles.stepIndicatorActive} />
          <View style={styles.stepIndicatorActive} />
          <View style={styles.stepIndicatorActive} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.stepText}>
          4. 다시 한번 비밀번호를 입력해 주세요.
        </Text>
        <TextInput
          value={inputPassword}
          style={styles.input}
          onChangeText={(text) => {
            setInputPassword(text);
          }}
          placeholder="비밀번호를 입력해주세요."
          placeholderTextColor="#787878"
          secureTextEntry
        />
      </View>

      <View style={styles.nextbutton}>
        <TouchableOpacity style={styles.button} onPress={validationPassword}>
          <Text style={styles.buttonText}>계정 생성하기</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{modalMessage}</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 5,
    marginTop: 3,
  },
  backButton: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#22215B",
    lineHeight: 40,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepIndicatorActive: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: "#6C99F0",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
  stepText: {
    fontSize: 16,
    color: "#22215B",
    marginBottom: 20,
    fontWeight: "bold",
    width: "70%",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 60,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  nextbutton: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#6C99F0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#22215B",
  },
  modalButtonText: {
    color: "#666666",
    fontSize: 13,
    marginBottom: 3,
  },
});

export default SignupScreenEmail;
