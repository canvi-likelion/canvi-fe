import React, {useState, useMemo} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import backIcon from "../../assets/back.png";
import {useDispatch} from "react-redux";
import {setWeather} from "../../store/reducers/picture-slice";

const ChooseWeather = ({navigation, route}) => {
    const {selectedDay, selectedMonth, selectedDate, title, content} =
        route.params;
    const [selectedWeather, setSelectedWeather] = useState(null);

    const dispatch = useDispatch();

    const isNextDisabled = useMemo(() => !selectedWeather, [selectedWeather]);

    const weatherIcons = [
        "weather-sunny",
        "weather-partly-cloudy",
        "weather-cloudy",
        "weather-rainy",
        "weather-pouring",
        "weather-snowy",
        "weather-fog",
    ];

    const handleNext = () => {
        if (!isNextDisabled) {
            dispatch(setWeather(selectedWeather.replace('weather-', '')))

            navigation.navigate("ChooseDetails", {
                selectedDay,
                selectedMonth,
                selectedWeather,
                selectedDate,
                title,
                content,
            });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backContainer}
                onPress={() => navigation.goBack()}
            >
                <Image source={backIcon} style={styles.icon}/>
            </TouchableOpacity>

            <View style={styles.navigation}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.navButtonbackText}>취소</Text>
                </TouchableOpacity>
                <Text style={styles.navTitle}>
                    {selectedMonth}월 {selectedDay}일의 일기
                </Text>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={handleNext}
                    disabled={isNextDisabled}
                >
                    <Text
                        style={[
                            styles.navButtonnextText,
                            isNextDisabled ? styles.disabledText : styles.activeText,
                        ]}
                    >
                        다음
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>날씨는 어땠나요?</Text>
            <View style={styles.weatherContainer}>
                {weatherIcons.map((iconName, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedWeather(iconName)}
                        style={[
                            styles.weatherIconContainer,
                            selectedWeather === iconName &&
                            styles.selectedWeatherIconContainer,
                        ]}
                    >
                        <Icon
                            name={iconName}
                            size={25}
                            color={selectedWeather === iconName ? "#4A90E2" : "#666"}
                            style={styles.weatherIcon}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 20,
    },
    icon: {
        width: 40,
        height: 40,
    },
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        marginTop: 10,
    },
    navButton: {
        padding: 10,
    },
    navButtonbackText: {
        fontSize: 13,
        color: "#B8CBF0",
    },
    navButtonnextText: {
        fontSize: 13,
    },
    activeText: {
        color: "#6C99F0",
    },
    disabledText: {
        color: "#B8CBF0",
    },
    navTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#22215B",
    },
    subtitle: {
        fontSize: 13.3,
        textAlign: "center",
        color: "#666666",
        marginBottom: 25,
        marginTop: 5,
    },
    weatherContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    selectedWeatherIconContainer: {
        borderColor: "#4A90E2",
    },
    weatherIcon: {
        marginHorizontal: 10,
    },
});

export default ChooseWeather;
