import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import {requestApi} from "../../../utils/apiSetting";
import {useDispatch} from "react-redux";
import {setAccessToken, setUserName} from "../../../store/reducers/user-slice";

const logoImage = require('../../../assets/icon.png');
const emailIcon = require('../../../assets/email.png');
const passwordIcon = require('../../../assets/password.png');

const ResetPassword = ({navigation}) => {
    const [resetPasswordForm, setResetPasswordForm] = useState({
        "username": "",
        "email": ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const handleLogin = () => {
        setIsLoading(true);
        requestApi.post("/api/auth/reset-password", {
            username: resetPasswordForm.username,
            email: resetPasswordForm.email
        }).then(res => {
            navigation.navigate('Login');
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={logoImage} style={styles.logo}/>
                <Text style={styles.title}>비밀번호 초기화</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        value={resetPasswordForm.username}
                        onChangeText={(text) => setResetPasswordForm((prev) => ({
                            ...prev,
                            username: text
                        }))}
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#787878"
                    />
                    <Image source={emailIcon} style={styles.icon}/>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        value={resetPasswordForm.email}
                        onChangeText={(text) => setResetPasswordForm((prev) => ({
                            ...prev,
                            email: text
                        }))}
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#787878"
                    />
                    <Image source={passwordIcon} style={styles.iconp}/>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#FFFFFF"/>
                    ) : (
                        <Text style={styles.buttonText}>초기화</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.linksContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>로그인 페이지로</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>아직 계정이 없으신가요?{'   '}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.footerLink}>계정 생성하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 60,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        color: '#333333',
        height: '100%',
        fontSize: 15,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    iconp: {
        width: 28,
        height: 28,
        marginRight: 5,
    },
    button: {
        width: '80%',
        height: 60,
        backgroundColor: '#6C99F0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    link: {
        color: '#828282',
        fontSize: 14,
    },
    linkDivider: {
        color: '#828282',
        fontSize: 14,
        marginHorizontal: 5,
    },
    footerContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: '#828282',
        fontSize: 16,
    },
    footerLink: {
        color: '#2F69D9',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});

export default ResetPassword;
