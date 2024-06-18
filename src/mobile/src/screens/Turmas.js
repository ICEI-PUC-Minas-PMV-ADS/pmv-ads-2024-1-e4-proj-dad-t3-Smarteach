import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { getClassList } from "../services/turmas.services";
import { useIsFocused } from "@react-navigation/native";
import { Icon } from "react-native-paper";

export default function Turmas() {
  const [classList, setClassList] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const fetchData = () => {
    getClassList().then((data) => setClassList(data));
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const renderItem = ({ item }) => {
    if (!item) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Mural", { turma: item })}
      >
        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 15,
            }}
          >
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="calendar" size={24} color="#004AAD" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="book" size={24} color="#004AAD" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, backgroundColor: '#004AAD', borderRadius: 10, alignItems: 'center', alignSelf: 'center',  width: '90%' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', justifyContent: 'center' }}> Turma: {item.number}</Text>
          </View>
          <Image
            source={{ uri: "https://img.freepik.com/free-photo/medium-shot-kids-cheating-school_23-2150256554.jpg" }}
            style={{
              width: "90%",
              height: 150,
              marginTop: 15,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.body}>
      <Header title={"Turmas"} />
      <View style={styles.container}>
        <FlatList
          data={classList}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 16,
  },
  iconButton: {
    padding: 10,
  },
});
