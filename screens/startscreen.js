import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const main1Image = require('../assets/main1.png');
const main2Image = require('../assets/main2.png');
const main3Image = require('../assets/main3.png');

const { width: screenWidth } = Dimensions.get('window');

const StartScreen = ({ navigation }) => {
  const entries = [
    { image: main1Image, width: 400, height: 400 },
    { image: main2Image, width: 300, height: 260 },
    { image: main3Image, width: 300, height: 260 },
  ];

  const renderItem = (entry, index) => {
    return (
      <View style={styles.slide} key={index}>
        <Image source={entry.image} style={{ width: entry.width, height: entry.height }} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlemain}>
        <Text style={styles.title}>세계 최초의 우주 관광선 예약 오픈,</Text> 
        <Text style={styles.title}>대기 리스트 급증</Text>
        <Text style={styles.subtitle}>빠르고 효과적인 운동 루틴: 15분만에 완벽한 운동</Text>
      </View>

      <Swiper style={styles.wrapper} showsButtons={false} dotStyle={styles.dot} activeDotStyle={styles.dotActive}>
        {entries.map((entry, index) => renderItem(entry, index))}
      </Swiper>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonOutlineText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C99F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titlemain: {
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
  },
  wrapper: {
    height: 500,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#E0E0E0',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: '#000000',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#6C99F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOutline: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonOutlineText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartScreen;