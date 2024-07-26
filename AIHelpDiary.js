import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AIHelpDiary = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerButton} onPress={() => navigation.goBack()}>
            {"<"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>도와드릴게요.</Text>
      </View>
      <Text style={styles.subtitle}>
        제공된 옵션들 중 하나에 일기를 작성해보세요.
      </Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.typeContainer}>
          {["Type 1", "Type 2", "Type 3", "Type 4"].map((type, index) => (
            <TouchableOpacity key={index} style={styles.typeButton}>
              <Text style={styles.typeButtonText}>{type}</Text>
            </TouchableOpacity>
          ))}
          {["가나다라", "ABCDEF", "문화기", "랜덤"].map((label, index) => (
            <View key={index} style={styles.detailContainer}>
              <Text style={styles.label}>{label}</Text>
              <TouchableOpacity
                style={styles.chooseButton}
                onPress={() => navigation.navigate("AIWriteDiary")}
              >
                <Text style={styles.chooseButtonText}>선택하기</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  headerButton: {
    fontSize: 18,
    color: "#4A90E2",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    paddingHorizontal: 20,
    color: "#666",
    marginBottom: 10,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  typeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  typeButton: {
    backgroundColor: "#FFF",
    padding: 10,
    margin: 5,
    borderRadius: 25,
  },
  typeButtonText: {
    color: "#4A90E2",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 16,
  },
  chooseButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 25,
    padding: 10,
  },
  chooseButtonText: {
    color: "#FFF",
  },
});

export default AIHelpDiary;
