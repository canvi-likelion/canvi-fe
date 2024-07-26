import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChooseDetails = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedHairStyle, setSelectedHairStyle] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>8/6일의 일기</Text>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>생성하기</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>세부 정보를 선택해주세요.</Text>
      <View style={styles.selectionContainer}>
        <Text style={styles.selectionTitle}>성별</Text>
        <View style={styles.selectionRow}>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedGender === "female" && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender("female")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedGender === "female" && styles.selectedButtonText,
              ]}
            >
              # 여성
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedGender === "male" && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender("male")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedGender === "male" && styles.selectedButtonText,
              ]}
            >
              # 남성
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.selectionTitle}>머리 스타일</Text>
        <View style={styles.selectionRow}>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedHairStyle === "short" && styles.selectedButton,
            ]}
            onPress={() => setSelectedHairStyle("short")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedHairStyle === "short" && styles.selectedButtonText,
              ]}
            >
              # 숏 컷
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedHairStyle === "bob" && styles.selectedButton,
            ]}
            onPress={() => setSelectedHairStyle("bob")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedHairStyle === "bob" && styles.selectedButtonText,
              ]}
            >
              # 단발
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedHairStyle === "medium" && styles.selectedButton,
            ]}
            onPress={() => setSelectedHairStyle("medium")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedHairStyle === "medium" && styles.selectedButtonText,
              ]}
            >
              # 중간 길이
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectionButton,
              selectedHairStyle === "long" && styles.selectedButton,
            ]}
            onPress={() => setSelectedHairStyle("long")}
          >
            <Text
              style={[
                styles.selectionButtonText,
                selectedHairStyle === "long" && styles.selectedButtonText,
              ]}
            >
              # 장발
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tooltipContainer}>
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>
            New feature! This is a handy template you can use for your apps (as
            an onboarding tip feature for instance).
          </Text>
        </View>
      </View>
      <Text style={styles.footerText}>
        작성을 간단하게 입력해주시면 좋아요.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: "#4A90E2",
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    color: "#666666",
    marginBottom: 20,
  },
  selectionContainer: {
    paddingHorizontal: 20,
  },
  selectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  selectionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  selectionButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  selectedButton: {
    backgroundColor: "#4A90E2",
  },
  selectionButtonText: {
    color: "#666666",
  },
  selectedButtonText: {
    color: "#FFFFFF",
  },
  tooltipContainer: {
    padding: 20,
    alignItems: "center",
  },
  tooltip: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    padding: 15,
  },
  tooltipText: {
    color: "#FFFFFF",
  },
  footerText: {
    textAlign: "center",
    color: "#666666",
    marginBottom: 20,
  },
});

export default ChooseDetails;
