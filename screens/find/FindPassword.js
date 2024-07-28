import {View} from "react-native";
import {requestApi} from "../../utils/apiSetting";
import {useSelector} from "react-redux";

function FindPassword() {
    const reduxUserInfo = useSelector(state => state.userInfo);

    const handleWithdrawal = () => {
        requestApi.post("/api/auth/reset-password", {
            username: reduxUserInfo.username,
            email: reduxUserInfo.email
        }).then(res => {
            navigation.navigate('Start');

            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <View>

        </View>
    );
}

export default FindPassword;