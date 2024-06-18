import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getStudent } from '../services/alunos.services';
import { getTeacher } from '../services/professor.services';
import { getAdmin } from '../services/admin.services';
import Header from '../components/Header';
import { UserList } from '../components/UserList';

const Usuarios = () => {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [admin, setAdmin] = useState([]);
  const isFocused = useIsFocused();
  
  const fetchData = () => {
    getStudent().then((data) => setAlunos(data));
    getTeacher().then((data) => setProfessores(data));
    getAdmin().then((data) => setAdmin(data));
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  return (
    <ScrollView style={styles.body}>
      <Header title={'Usuários'} />
      <View style={styles.main}>
        <View>
          <Text style={styles.mainTitle}> Administradores </Text>
          <UserList data={admin} editLink={'EditarAdmin'}/>
        </View>
        <View>
          <Text style={styles.mainTitle}> Professores </Text>
          <UserList data={professores} editLink={'EditarProfessor'}/>
        </View>
        <View>
          <Text style={styles.mainTitle}> Alunos </Text>
          <UserList data={alunos} editLink={'EditarAluno'}/>
        </View>
      </View>
    </ScrollView>
 )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  main: {
    flex: 1,
    paddingTop: 12,
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#004AAD',
    borderRadius: 12,
    padding: 8,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});

export default Usuarios;
