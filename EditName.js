import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";

const EditName = ({ navigation }) => {
  const reduxUserInfo = useSelector((state) => state.userInfo);
  const [name, setName] = useState(reduxUserInfo.userName);
  const dispatch = useDispatch();

  const handleNameChange = () => {
    dispatch({ type: "UPDATE_USER_NAME", payload: name });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={25} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>내 정보</Text>
      <View style={styles.editItem}>
        <Text style={styles.infoTitle}>이름</Text>
        <TextInput
          style={styles.infoContent}
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity onPress={() => setName("")}>
          <Icon name="close-circle-outline" size={20} color="#A8A8A8" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleNameChange}>
        <Text style={styles.saveButtonText}>변경하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  editItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  infoTitle: {
    fontSize: 16,
    color: "#4A90E2",
  },
  infoContent: {
    flex: 1,
    fontSize: 16,
    color: "#666666",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default EditName;
