import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { getClassProfile } from '../services/turmas.services';

export default function Mural() {
  const route = useRoute();
  const navigation = useNavigation();
  const { turma } = route.params;
  const [classProfileData, setClassProfileData] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const fetchData = () => {
    getClassProfile(turma._id).then((data) => setClassProfileData(data));
  };

  const renderTaskItem = ({ item }) => {
    return (
      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.taskTitle}>{item.name}</Text>
          <Text style={styles.taskDateTime}>{item.timeSlot}</Text>
        </View>
        <View style={styles.taskContent}>
          <Text style={styles.taskSubject}>{item.subject}</Text>
          <Text style={styles.taskDetail}>{item.teacher_email}</Text>
        </View>
      </View>
    );
  };

  const renderTaskList = () => {
    const tasks = [];

    // Iterating over years, months, days, and hours to collect tasks
    Object.keys(classProfileData.timeline || {}).forEach(year => {
      Object.keys(classProfileData.timeline[year] || {}).forEach(month => {
        Object.keys(classProfileData.timeline[year][month] || {}).forEach(day => {
          Object.keys(classProfileData.timeline[year][month][day] || {}).forEach(hour => {
            const timeSlot = `${day}:${month}:${year}:${hour}`;
            const task = classProfileData.timeline[year][month][day][hour];
            tasks.push({ ...task, timeSlot: timeSlot });
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
        <Appbar.Action iconColor="#004AAD" icon="logout" onPress={() => setSigned(false)} />
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
  taskContainer: {
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1E40AF",
    padding: 10,
    borderRadius: 10,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  taskDateTime: {
    fontSize: 16,
    color: "white",
    textAlign: "right",
  },
  taskContent: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  taskSubject: {
    fontSize: 18,
    color: "#374151",
  },
  taskDetail: {
    fontSize: 16,
    color: "#6B7280",
  },
});
