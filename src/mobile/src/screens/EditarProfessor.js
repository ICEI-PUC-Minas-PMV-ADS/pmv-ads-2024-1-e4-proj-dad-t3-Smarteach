import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { Appbar, Button, TextInput } from 'react-native-paper';
import { getTeacherProfile, deleteTeacher, updateTeacher } from '../services/professor.services';

const EditarProfessor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [professorProfileData, setProfessorProfileData] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;
  const isFocused = useIsFocused();
  
  useEffect(() => {
    fetchData();
  }, [isFocused]);
  
  const fetchData = () => {
    if (id) {
      getTeacherProfile(id).then((data) => 
        setProfessorProfileData(data)
    );
    } else {
      console.error('ID parameter is missing or invalid');
    }
  }; 

  const handleDeleteProfessor = () => {
    const teacherId = professorProfileData._id
      
    deleteTeacher(teacherId);
  }

  const handleUpdateProfessor = () => {
    const teacherId = professorProfileData._id;
    const updatedTeacherData = {
      id: teacherId,
      name,
      email,
      class_number: classNumber,
      senha,
    }
    updateTeacher(updatedTeacherData);
  }

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Appbar.Header style={styles.header} mode="center-aligned">
        <Appbar.Action iconColor="#004AAD" icon="arrow-left" onPress={() => navigation.goBack()} />
        <Appbar.Content color="#004AAD" title={'Editar Professor'} titleStyle={{ fontWeight: 'bold' }} />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={`${professorProfileData.name}`}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder={`${professorProfileData.email}`}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder={`${professorProfileData.class_number}`}
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
          <Button onPress={handleUpdateProfessor} mode='contained'>Alterar</Button>
          <Button onPress={handleDeleteProfessor} mode='contained' buttonColor="#931603">Excluir</Button>
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

export default EditarProfessor;
