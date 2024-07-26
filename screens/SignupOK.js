import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const checkIcon = require('../assets/check.png');

const SignupScreenEmail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={checkIcon} style={styles.logo} />
        <Text style={styles.title}>가입을 축하드려요!</Text>
        <Text style={styles.text}>가입을 축하드립니다.</Text>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerLink}>첫 로그인 하러 가기</Text>
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
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#22215B',
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    color: '22215B',
    fontWeight: 'bold',
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
  footerLink: {
    color: '#2F69D9',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default SignupScreenEmail;
