import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setEmail } from "../../../store/reducers/register-slice";
import { requestApi } from "../../../utils/apiSetting";
import { setAccessToken, setUserName } from "../../../store/reducers/user-slice";

const backIcon = require('../../../assets/back.png');

const SignupScreenValidationEmail = ({ navigation }) => {
    const [inputEmailCode, setInputEmailCode] = useState('');
    const [handleNextButton, setHandleNextButton] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const reduxRegisterInfo = useSelector(state => state.registerInfo);

    const verifyCode = () => {
        setIsLoading(true);
        requestApi.post("/api/email-auth/verify-code", {
            email: reduxRegisterInfo.email,
            code: inputEmailCode
        }).then(res => {
            setHandleNextButton(true);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
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
                <Text style={styles.stepText}>2-1. 이메일로 전송된 코드를 입력해주세요.</Text>
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
                <TouchableOpacity style={!handleNextButton ? styles.button : styles.disableButton} onPress={verifyCode} disabled={handleNextButton || isLoading}>
                    <Text style={!handleNextButton ? styles.buttonText : styles.disableButtonText}>인증</Text>
                </TouchableOpacity>
                {isLoading && <ActivityIndicator size="small" color="#6C99F0" style={styles.loader} />}
            </View>

            <View style={styles.nextbutton}>
                <TouchableOpacity style={handleNextButton ? styles.button : styles.disableButton} onPress={() => navigation.navigate('SignupScreenPW')} disabled={!handleNextButton}>
                    <Text style={handleNextButton ? styles.buttonText : styles.disableButtonText}>다음</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 50,
    },
    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 5,
        marginTop: 3,
    },
    backButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#22215B',
        lineHeight: 40,
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepIndicatorActive: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: '#6C99F0',
    },
    stepIndicatorInactive: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: '#D9D9D9',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
    },
    stepText: {
        fontSize: 16,
        color: '#22215B',
        marginBottom: 20,
        fontWeight: 'bold',
        width: '70%',
    },
    email: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    emailContainer: {
        width: '50%',
        height: 60,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    inputLeft: {
        height: '100%',
        textAlign: 'left',
    },
    atSymbol: {
        marginHorizontal: 10,
        color: '#787878',
    },
    inputRight: {
        height: 60,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 30,
        width: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
    },
    dropdownText: {
        color: '#787878',
        fontSize: 16,
        textAlign: 'center',
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    dropdownTextFocused: {
        color: '#22215B',
        textDecorationLine: 'underline',
    },
    dropdown: {
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 30,
        marginRight: 20,
    },
    dropdownTextStyle: {
        color: '#787878',
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'rgba(217, 217, 217, 0)',
    },
    nextbutton: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        width: '80%',
        height: 60,
        backgroundColor: '#6C99F0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disableButton: {
        width: '80%',
        height: 60,
        backgroundColor: '#f8f8f8',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disableButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loader: {
        marginTop: 10,
    },
});

export default SignupScreenValidationEmail;
