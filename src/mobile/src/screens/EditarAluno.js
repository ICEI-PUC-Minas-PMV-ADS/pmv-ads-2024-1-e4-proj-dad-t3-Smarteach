import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { deleteStudent, getStudentProfile, updateStudent } from '../services/alunos.services';
import { Appbar, Button, TextInput } from 'react-native-paper';


const EditarAluno = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [studentProfileData, setStudentProfileData] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;
  const isFocused = useIsFocused();

  console.log(route.params)
  
  useEffect(() => {
    fetchData();
  }, [isFocused]);
  
  const fetchData = () => {
    if (id) {
      getStudentProfile(id).then((data) => 
        setStudentProfileData(data)
    );
    } else {
      console.error('ID parameter is missing or invalid');
    }
  }; 

  const handleDeleteStudent = () => {
    const studentId = studentProfileData._id
      
    deleteStudent(studentId);
  }

  const handleUpdateStudent = () => {
    const studentId = studentProfileData._id;
    const updatedStudentData = {
      id: studentId,
      class_number: classNumber,
      name,
      email,
      senha,
    }
    updateStudent(updatedStudentData);
  }

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Appbar.Header style={styles.header} mode="center-aligned">
        <Appbar.Action iconColor="#004AAD" icon="arrow-left" onPress={() => navigation.goBack()} />
        <Appbar.Content color="#004AAD" title={'Editar Administrador'} titleStyle={{ fontWeight: 'bold' }} />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={`${studentProfileData.name}`}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder={`${studentProfileData.email}`}
          value={email}
          onChangeText={setEmail}
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder={`${studentProfileData.class_number}`}
          value={classNumber}
          onChangeText={setClassNumber}
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button onPress={handleUpdateStudent} mode='contained'>Alterar</Button>
          <Button onPress={handleDeleteStudent} mode='contained' buttonColor="#931603">Excluir</Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 16,
    gap: 12,
  },
  buttonContainer: {
    gap: 12,
  }
});

export default EditarAluno;
