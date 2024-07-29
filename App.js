import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/startscreen';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/signup/SignupScreen';
import SignupScreenEmail from './screens/signup/SignupScreenEmail';
import SignupScreenPW from './screens/signup/SignupScreenPW';
import SignupScreenPWCheck from './screens/signup/SignupScreenPWCheck';
import SignupOK from './screens/signup/SignupOK';
import MainPage from './MainPage';
import MakeDiary from './MakeDiary';
import ChooseDrawStyle from './ChooseDrawStyle';
import ChooseDate from './ChooseDate';
import WriteDiary from './WriteDiary';
import ChooseWeather from './ChooseWeather';
import ChooseDetails from './ChooseDetails';
import AIHelpDiary from './AIHelpDiary';
import AIWriteDiary from './AIWriteDiary';
import AICompleteDiary from './AICompleteDiary';
import MyPage from "./screens/mypage/MyPage";
import SignupScreenValidationEmail from "./screens/signup/SignupScreenValidationEmail";
import ResetPassword from "./screens/find/ResetPassword";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Start">
                        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SignupScreenEmail" component={SignupScreenEmail} options={{ headerShown: false }} />
                        <Stack.Screen name="SignupScreenValidationEmail" component={SignupScreenValidationEmail} options={{ headerShown: false }} />
                        <Stack.Screen name="SignupScreenPW" component={SignupScreenPW} options={{ headerShown: false }} />
                        <Stack.Screen name="SignupScreenPWCheck" component={SignupScreenPWCheck} options={{ headerShown: false }} />
                        <Stack.Screen name="SignupOK" component={SignupOK} options={{ headerShown: false }} />
                        <Stack.Screen name="MainPage" component={MainPage} options={{ title: "Main Page" }} />
                        <Stack.Screen name="MakeDiary" component={MakeDiary} options={{ title: "Make Diary" }} />
                        <Stack.Screen name="MyPage" component={MyPage} options={{ title: "MyPage" }} />
                        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: "ResetPassword" }} />
                        <Stack.Screen name="ChooseDrawStyle" component={ChooseDrawStyle} options={{ title: "Choose Draw Style" }} />
                        <Stack.Screen name="ChooseDate" component={ChooseDate} options={{ title: "Choose Date" }} />
                        <Stack.Screen name="WriteDiary" component={WriteDiary} options={{ title: "Write Diary" }} />
                        <Stack.Screen name="ChooseWeather" component={ChooseWeather} options={{ title: "Choose Weather" }} />
                        <Stack.Screen name="ChooseDetails" component={ChooseDetails} options={{ title: "Choose Details" }} />
                        <Stack.Screen name="AIHelpDiary" component={AIHelpDiary} options={{ title: "AI Help Diary" }} />
                        <Stack.Screen name="AIWriteDiary" component={AIWriteDiary} options={{ title: "AI Write Diary" }} />
                        <Stack.Screen name="AICompleteDiary" component={AICompleteDiary} options={{ title: "AI Complete Diary" }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
