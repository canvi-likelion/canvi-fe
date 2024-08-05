import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from "react-redux";
import {requestApi} from "../../../utils/apiSetting";
import {setUserName} from "../../../store/reducers/register-slice";

const backIcon = require('../../../assets/back.png');

const SignUpScreen = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
                    <Image source={backIcon} style={styles.icon}/>
                    <Text style={styles.backButton}>계정 생성하기</Text>
                </TouchableOpacity>
                <View style={styles.stepIndicatorContainer}>
                    <View style={styles.stepIndicatorActive}/>
                    <View style={styles.stepIndicatorInactive}/>
                    <View style={styles.stepIndicatorInactive}/>
                    <View style={styles.stepIndicatorInactive}/>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.stepText}>1. 이름을 입력해 주세요.</Text>
                <TextInput
                    onChangeText={text => {
                        dispatch(setUserName(text));
                    }}
                    style={styles.input}
                    placeholder="예) 홍길동"
                    placeholderTextColor="#787878"
                />
            </View>

            <View style={styles.nextbutton}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreenEmail')}>
                    <Text style={styles.buttonText}>다음</Text>
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
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 60,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 30,
        paddingHorizontal: 20,
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
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SignUpScreen;
