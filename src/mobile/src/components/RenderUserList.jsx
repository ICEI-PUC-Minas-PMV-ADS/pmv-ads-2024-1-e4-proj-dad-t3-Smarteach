import { Link } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default RenderUserList = ({ item, editLink }) => {
    return (
      <View style={styles.taskContainer}>
        <Text style={{ color: 'black' }}> Nome: {item.name}</Text>
        <Text style={styles.taskDateTime}> Email: {item.email}</Text>
        <Text style={styles.taskDateTime}> Turma: {item.class_number}</Text>
        <View style={{ flex: 1, flexDirection: 'row'}}>
          <Link to={{ screen: editLink, params: { id: item._id } }} > Editar </Link> 
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#E5E7EB',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
      },
      taskDateTime: {
        fontSize: 16,
        color: 'black',
        marginTop: 5,
      },
  })