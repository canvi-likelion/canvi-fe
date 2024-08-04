import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";

const backIcon = require("./assets/back2.png");

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
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={backIcon} style={styles.icon} />
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
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#666666",
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
    fontSize: 13,
    fontWeight: "bold",
    color: "#22215B",
    margin: 10,
  },
  infoContent: {
    fontSize: 16,
    color: "#666666",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#6C99F0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default EditName;
