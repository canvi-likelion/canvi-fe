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
import ModalDropdown from "react-native-modal-dropdown";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../store/reducers/register-slice";
import { requestApi } from "../../../utils/apiSetting";
import backIcon from "../../../assets/back.png";
import Modal from "react-native-modal";

const SignupScreenEmail = ({ navigation }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [domain, setDomain] = useState("gmail.com");
  const domains = ["gmail.com", "naver.com", "kakao.com", "daum.com"];
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const dispatch = useDispatch();

  const handleSelect = (index, value) => {
    setDomain(value);
    setIsFocused(true);
  };

  const handleNext = () => {
    setIsLoading(true);
    dispatch(setEmail(`${inputEmail}@${domain}`));
    requestApi
      .post("/api/email-auth/send-code", {
        email: `${inputEmail}@${domain}`,
      })
      .then((res) => {
        console.log(res.data);
        setModalMessage("메일로 코드가 전송되었습니다.");
        setIsModalVisible(true);
        setTimeout(() => {
          setIsModalVisible(false);
          navigation.navigate("SignupScreenValidationEmail");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          if (err.response.status === 409) {
            setModalMessage("이미 가입된 이메일입니다.");
            setIsModalVisible(true);
          } else if (err.response.status === 429) {
            setModalMessage("발송된 메일이 있습니다.");
            setIsModalVisible(true);
            setTimeout(() => {
              setIsModalVisible(false);
              navigation.navigate("SignupScreenValidationEmail");
            }, 1000);
          } else {
            setModalMessage("이메일 전송에 실패했습니다. 다시 시도해 주세요.");
            setIsModalVisible(true);
          }
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
          <Text style={styles.backButton}>계정 생성하기</Text>
        </TouchableOpacity>
        <View style={styles.stepIndicatorContainer}>
          <View style={styles.stepIndicatorActive} />
          <View style={styles.stepIndicatorActive} />
          <View style={styles.stepIndicatorInactive} />
          <View style={styles.stepIndicatorInactive} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.stepText}>2. 이메일 주소를 입력해 주세요.</Text>
        <View style={styles.email}>
          <View style={styles.emailContainer}>
            <TextInput
              style={styles.inputLeft}
              placeholder="예) ABCD1234"
              placeholderTextColor="#787878"
              value={inputEmail}
              onChangeText={setInputEmail}
            />
          </View>
          <Text style={styles.atSymbol}>@</Text>
          <ModalDropdown
            options={domains}
            defaultValue={domain}
            defaultIndex={0}
            onSelect={handleSelect}
            textStyle={[
              styles.dropdownText,
              isFocused ? styles.dropdownTextFocused : null,
            ]}
            dropdownStyle={styles.dropdown}
            dropdownTextStyle={styles.dropdownTextStyle}
            style={styles.inputRight}
            adjustFrame={(style) => ({
              ...style,
              width: 150,
              right: 0,
            })}
          />
        </View>
      </View>

      <View style={styles.nextbutton}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
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
  atSymbol: {
    marginHorizontal: 10,
    color: "#787878",
  },
  inputRight: {
    height: 60,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    borderRadius: 30,
    width: "auto",
    justifyContent: "center",
    textAlign: "center",
  },
  dropdownText: {
    color: "#787878",
    fontSize: 16,
    textAlign: "center",
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  dropdownTextFocused: {
    color: "#22215B",
    textDecorationLine: "underline",
  },
  dropdown: {
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    borderRadius: 30,
    marginRight: 20,
  },
  dropdownTextStyle: {
    color: "#787878",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "rgba(217, 217, 217, 0)",
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

export default SignupScreenEmail;
