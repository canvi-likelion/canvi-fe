import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const AIHelpDiary = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerButton}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>도와드릴게요.</Text>
      </View>
      <Text style={styles.subtitle}>
        제공된 양식을 통해 함께 일기를 작성해보아요.
      </Text>
      <View style={styles.tabContainer}>
        {["Type 1", "Type 2", "Type 3", "Type 4"].map((type, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tabButton, index === 1 && styles.activeTabButton]}
          >
            <Text
              style={[
                styles.tabButtonText,
                index === 1 && styles.activeTabButtonText,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.scrollContainer}>
        {["가나다라", "가나다라", "가나다라", "가나다라", "가나다라"].map(
          (label, index) => (
            <View key={index} style={styles.detailContainer}>
              <Icon name="book-outline" size={40} color="#4A90E2" />
              <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.labelSubText}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </Text>
              </View>
              <TouchableOpacity
                style={styles.chooseButton}
                onPress={() => navigation.navigate("AIWriteDiary")}
              >
                <Text style={styles.chooseButtonText}>작성하기</Text>
              </TouchableOpacity>
            </View>
          )
        )}
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
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  headerButton: {
    fontSize: 16,
    color: "#4A90E2",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    paddingHorizontal: 20,
    color: "#666",
    marginVertical: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  tabButton: {
    backgroundColor: "#E8E8E8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: "#4A90E2",
  },
  tabButtonText: {
    fontSize: 16,
    color: "#333",
  },
  activeTabButtonText: {
    color: "#FFF",
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  labelContainer: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  labelSubText: {
    fontSize: 14,
    color: "#666",
  },
  chooseButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  chooseButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default AIHelpDiary;
