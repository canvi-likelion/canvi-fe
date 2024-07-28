import {requestApi} from "../../utils/apiSetting";
import {setAccessToken, setUserName} from "../../store/reducers/user-slice";
import {Text, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useSelector} from "react-redux";

function MyPage({navigation}) {

    const reduxUserInfo = useSelector(state => state.userInfo);
    const handleLogout = () => {
        requestApi.post("/api/auth/logout", {},
            {
                headers: {
                    Authorization: `Bearer ${reduxUserInfo.accessToken}`
                }
            }).then(res => {
            navigation.navigate('Start');

            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleWithdrawal = () => {
        requestApi.delete("/api/auth/user", {},
            {
                headers: {
                    Authorization: `Bearer ${reduxUserInfo.accessToken}`
                }
            }).then(res => {
            navigation.navigate('Start');

            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <SafeAreaView>
            <TouchableOpacity onPress={handleLogout}>
                <Text>로그아웃</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleWithdrawal}>
                <Text>회원 탈퇴</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default MyPage;