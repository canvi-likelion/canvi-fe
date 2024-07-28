import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView, Touchable, TouchableOpacity,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import {useSelector} from "react-redux";

const MainPage = ({navigation}) => {

    const reduxUserInfo = useSelector((state) => state.userInfo)

    // debug
    console.log("accessToken: ", reduxUserInfo.accessToken);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{reduxUserInfo.userName}님,</Text>
                    <Text style={styles.subHeaderText}>오늘의 하루도 기록해볼까요?</Text>
                </View>
                <View style={styles.profileCard}>
                    <Image
                        source={require("./assets/img/profile.png")}
                        style={styles.profileImage}
                    />
                    <Button
                        title="Let's Start"
                        onPress={() => navigation.navigate("MakeDiary")}
                    />
                </View>
                <View style={styles.blogCard}>
                    <Image
                        source={require("./assets/img/mainPageCard.png")}
                        style={styles.blogImage}
                    />
                    <Text style={styles.blogTitle}>어제의 {reduxUserInfo.userName}님은?</Text>
                    <Text style={styles.blogDate}>Monday Jan 20, 2020</Text>
                    <Text style={styles.blogContent}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                        pretium placerat ut platea. Purus blandit integer sagittis massa vel
                        est hac.
                    </Text>
                    <Button title="Read Full Blog" onPress={() => {
                    }}/>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                    <Icon name="home-outline" size={30} color="#4A90E2"/>
                    <Text style={[styles.footerText, styles.activeText]}>홈</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="calendar-outline" size={30} color="#A8A8A8"/>
                    <Text style={styles.footerText}>캘린더</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('MyPage')}>
                    <Icon name="person-outline" size={30} color="#A8A8A8"/>
                    <Text style={styles.footerText}>마이페이지</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },
    header: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subHeaderText: {
        fontSize: 16,
        color: "#666666",
    },
    profileCard: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        margin: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    blogCard: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        margin: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    blogImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    blogTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    blogDate: {
        fontSize: 14,
        color: "#666666",
        marginBottom: 10,
    },
    blogContent: {
        fontSize: 14,
        color: "#666666",
        marginBottom: 10,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        backgroundColor: "#F8F8F8",
        borderTopWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 20,
    },
    iconContainer: {
        alignItems: "center",
    },
    footerText: {
        fontSize: 14,
        color: "#A8A8A8",
        marginTop: 5,
    },
    activeText: {
        color: "#4A90E2",
    },
});

export default MainPage;
