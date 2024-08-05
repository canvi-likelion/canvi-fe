import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { requestApi } from '../../utils/apiSetting';
import { setAccessToken, setUserName } from '../../store/reducers/user-slice';

const MyPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector(state => state.userInfo);

  const handleLogout = async () => {
    try {
      await requestApi.post('/api/auth/logout', {}, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      dispatch(setAccessToken(''));
      dispatch(setUserName(''));
      navigation.navigate('Start');
    } catch (err) {
      console.error('Logout error:', err);
      Alert.alert('로그아웃 실패', '다시 시도해주세요.');
    }
  };

  const handleWithdrawal = () => {
    Alert.alert(
      '회원 탈퇴',
      '정말로 탈퇴하시겠습니까? 이 작업은 취소할 수 없습니다.',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '탈퇴',
          style: 'destructive',
          onPress: async () => {
            try {
              await requestApi.delete('/api/auth/user', {
                headers: { Authorization: `Bearer ${accessToken}` }
              });
              dispatch(setAccessToken(''));
              dispatch(setUserName(''));
              navigation.navigate('Start');
            } catch (err) {
              console.error('Withdrawal error:', err);
              Alert.alert('탈퇴 실패', '다시 시도해주세요.');
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleWithdrawal}>
        <Text style={styles.buttonText}>회원 탈퇴</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MyPage;
