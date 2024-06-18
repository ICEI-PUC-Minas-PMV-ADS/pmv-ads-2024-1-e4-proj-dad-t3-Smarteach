import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";

import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { getClassProfile } from '../services/turmas.services';

export default function Mural() {
  const route = useRoute();
  const navigation = useNavigation();
  const { turma } = route.params;
  const [classProfileData, setClassProfileData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const fetchData = () => {
    getClassProfile(turma._id).then((data) => setClassProfileData(data));
  };

  const renderTaskItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: "#E5E7EB", borderRadius: 10, marginVertical: 10, padding: 10, width: 350, }}>
        <View style={{ flexDirection: "row", justifyContent: 'center',alignSelf: 'center', backgroundColor: "#1E40AF", padding: 10, borderRadius: 10, width: '90%', }}>
          <Text style={styles.taskTitle}>{item.name}</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={styles.taskDateTime}>{item.timeSlot1}</Text>
            <Text style={styles.taskDateTime}>{item.timeSlot2}</Text>
          </View>
        </View>
        <View style={styles.taskContent}>
          <Text style={styles.taskSubject}>{item.subject}</Text>
          <Image
            style={styles.taskImage}
            source={{ uri: 'https://img.global.news.samsung.com/br/wp-content/uploads/2018/01/flip-samsung.png' }} />
          <Text style={styles.taskDetail}>{item.teacher_email}</Text>
        </View>
      </View>
    );
  };

  const renderTaskList = () => {
    const tasks = [];
    Object.keys(classProfileData.timeline || {}).forEach(year => {
      Object.keys(classProfileData.timeline[year] || {}).forEach(month => {
        Object.keys(classProfileData.timeline[year][month] || {}).forEach(day => {
          Object.keys(classProfileData.timeline[year][month][day] || {}).forEach(hour => {
            const timeSlot = `${day}/${month}/  ${hour}`;
            const timeSlot1 = `${day}/${month}`;
            const timeSlot2 = `${hour}`;
            const task = classProfileData.timeline[year][month][day][hour];
            tasks.push({ ...task, timeSlot1: timeSlot1, timeSlot2: timeSlot2 });

          });
        });
      });
    });

    return (
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={renderTaskItem}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
      />
    );
  };

  return (
    <ScrollView style={styles.body}>
      <Appbar.Header style={styles.header} mode="center-aligned">
        <Appbar.Action iconColor="#004AAD" icon="arrow-left" onPress={() => navigation.goBack()} />
        <Appbar.Content color="#004AAD" title={'Mural'} titleStyle={{ fontWeight: 'bold' }} />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              height: 35,
              width: 340,
              marginTop: 12,
              backgroundColor: "#004AAD",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 23,
              }}
            >
              {turma.number}
            </Text>
          </View>
          {renderTaskList()}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 16,
  },
  header: {
    backgroundColor: "#fff",
  },

  taskTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 15,
  },
  taskDateTime: {
    flex: 1,
    fontSize: 16,
    color: "white",
    flexWrap: 'wrap',  
  },
  taskContent: {
    
    marginTop: 10,
  },
  taskSubject: {
    fontSize: 18,
    color: "#374151",
    justifyContent: 'center',
    alignSelf: 'center',
  },
  taskImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 130,
    marginVertical: 10,
    borderRadius: 10,
  },
  taskDetail: {
    fontSize: 16,
    color: "#6B7280",
    justifyContent: 'center',
    alignSelf: 'center',
  },
});