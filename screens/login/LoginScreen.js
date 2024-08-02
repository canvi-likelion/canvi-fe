import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {requestApi} from "../../utils/apiSetting";
import {useDispatch} from "react-redux";
import {setAccessToken, setUserName} from "../../store/reducers/user-slice";

const logoImage = require('../../assets/icon.png');
const emailIcon = require('../../assets/email.png');
const passwordIcon = require('../../assets/password.png');

const LoginScreen = ({navigation}) => {
    const [loginForm, setLoginForm] = useState({
        "email": "",
        "password": ""
    })

    const dispatch = useDispatch()

    const handleLogin = () => {
        requestApi.post("/api/auth/login", {
            username: loginForm.username,
            password: loginForm.password
        }).then(res => {
            dispatch(setUserName(res.data.result.username));
            dispatch(setAccessToken(res.data.result.accessToken));
            navigation.navigate('MainPage');
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={logoImage} style={styles.logo}/>
                <Text style={styles.title}>로그인</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        value={loginForm.username}
                        onChangeText={(text) => setLoginForm((prev) => ({
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
                        value={loginForm.password}
                        onChangeText={(text) => setLoginForm((prev) => ({
                            ...prev,
                            password: text
                        }))}
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#787878"
                        secureTextEntry
                    />
                    <Image source={passwordIcon} style={styles.iconp}/>
                </View>

                {/*<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>*/}
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>

                <View style={styles.linksContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={styles.link}>비밀번호 초기화</Text>
                    </TouchableOpacity>
                    {/*<Text style={styles.linkDivider}> | </Text>*/}
                    {/*<TouchableOpacity>*/}
                    {/*    <Text style={styles.link}>비밀번호 찾기</Text>*/}
                    {/*</TouchableOpacity>*/}
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

export default LoginScreen;
