import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/auth/login/LoginScreen";
import SignUpScreen from "./screens/auth/signup/SignupScreen";
import SignupScreenEmail from "./screens/auth/signup/SignupScreenEmail";
import SignupScreenPW from "./screens/auth/signup/SignupScreenPW";
import SignupScreenPWCheck from "./screens/auth/signup/SignupScreenPWCheck";
import SignupOK from "./screens/auth/signup/SignupOK";
import MainPage from "./screens/MainPage";
import MakeDiary from "./screens/diary/MakeDiary";
import MakeDiaryAI from "./screens/diary/MakeDiaryAI";
import ChooseDrawStyle from "./screens/diary/ChooseDrawStyle";
import ChooseDate from "./screens/diary/ChooseDate";
import WriteDiary from "./screens/diary/WriteDiary";
import ChooseWeather from "./screens/diary/ChooseWeather";
import ChooseDetails from "./screens/diary/ChooseDetails";
import AIHelpDiary from "./screens/diary/AIHelpDiary";
import AIWriteDiary from "./screens/diary/AIWriteDiary";
import AICompleteDiary from "./screens/diary/AICompleteDiary";
import MyPage from "./screens/user/MyPage";
import UserInfo from "./screens/user/UserInfo";
import EditName from "./screens/user/EditName";
import Announcements from "./screens/Announcements";
import ChangePasswordStep1 from "./screens/auth/password/ChangePasswordStep1";
import ChangePasswordStep2 from "./screens/auth/password/ChangePasswordStep2";
import ChangePasswordStep3 from "./screens/auth/password/ChangePasswordStep3";
import ShowDiary from "./screens/diary/ShowDiary";
import SignupScreenValidationEmail from "./screens/auth/signup/SignupScreenValidationEmail";
import ResetPassword from "./screens/auth/password/ResetPassword";
import { Use } from "react-native-svg";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupScreenEmail"
              component={SignupScreenEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupScreenValidationEmail"
              component={SignupScreenValidationEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupScreenPW"
              component={SignupScreenPW}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupScreenPWCheck"
              component={SignupScreenPWCheck}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupOK"
              component={SignupOK}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakeDiary"
              component={MakeDiary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakeDiaryAI"
              component={MakeDiaryAI}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyPage"
              component={MyPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseDrawStyle"
              component={ChooseDrawStyle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseDate"
              component={ChooseDate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WriteDiary"
              component={WriteDiary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseWeather"
              component={ChooseWeather}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseDetails"
              component={ChooseDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AIHelpDiary"
              component={AIHelpDiary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AIWriteDiary"
              component={AIWriteDiary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AICompleteDiary"
              component={AICompleteDiary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserInfo"
              component={UserInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditName"
              component={EditName}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Announcements"
              component={Announcements}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePasswordStep1"
              component={ChangePasswordStep1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePasswordStep2"
              component={ChangePasswordStep2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePasswordStep3"
              component={ChangePasswordStep3}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="ShowDiary" 
              component={ShowDiary} 
              options={{ headerShown: false }}
            />
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
