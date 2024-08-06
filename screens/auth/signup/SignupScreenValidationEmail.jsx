import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { requestApi } from "../../../utils/apiSetting";
import backIcon from "../../../assets/back.png";
import Modal from "react-native-modal";

const SignupScreenValidationEmail = ({ navigation }) => {
  const [inputEmailCode, setInputEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const reduxRegisterInfo = useSelector((state) => state.registerInfo);

  const verifyCode = () => {
    setIsLoading(true);
    requestApi
      .post("/api/email-auth/verify-code", {
        email: reduxRegisterInfo.email,
        code: inputEmailCode,
      })
      .then((res) => {
        setModalMessage("메일 인증이 완료되었습니다.");
        setIsModalVisible(true);
        setTimeout(() => {
          setIsModalVisible(false);
          navigation.navigate("SignupScreenPW");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 400) {
          setModalMessage("인증 코드를 확인해주세요.");
          setIsModalVisible(true);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}
        >
          <Image source={backIcon} style={styles.icon} />
          <Text style={styles.backButton}>이메일 검증</Text>
        </TouchableOpacity>
        <View style={styles.stepIndicatorContainer}>
          <View style={styles.stepIndicatorActive} />
          <View style={styles.stepIndicatorActive} />
          <View style={styles.stepIndicatorInactive} />
          <View style={styles.stepIndicatorInactive} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.stepText}>
          2-1. 이메일로 전송된 코드를 입력해주세요.
        </Text>
        <View style={styles.email}>
          <View style={styles.emailContainer}>
            <TextInput
              style={styles.inputLeft}
              placeholder="123456"
              placeholderTextColor="#787878"
              value={inputEmailCode}
              onChangeText={setInputEmailCode}
            />
          </View>
        </View>
      </View>

      <View style={styles.nextbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={verifyCode}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>다음</Text>
        </TouchableOpacity>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color="#6C99F0"
            style={styles.loader}
          />
        )}
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
  stepIndicatorInactive: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
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
  email: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  emailContainer: {
    width: "50%",
    height: 60,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  inputLeft: {
    height: "100%",
    textAlign: "left",
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
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loader: {
    marginTop: 10,
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

export default SignupScreenValidationEmail;
