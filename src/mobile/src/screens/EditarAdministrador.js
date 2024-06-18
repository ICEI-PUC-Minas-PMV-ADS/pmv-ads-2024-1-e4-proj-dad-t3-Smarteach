import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { deleteAdmin, getAdminProfile, updateAdmin } from '../services/admin.services';
import { Appbar, Button, TextInput } from 'react-native-paper';

const EditarAdministrador = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [adminProfileData, setAdminProfileData] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;
  const isFocused = useIsFocused();
  
  useEffect(() => {
    fetchData();
  }, [isFocused]);
  
  const fetchData = () => {
    if (id) {
      getAdminProfile(id).then((data) => 
        setAdminProfileData(data)
    );
    } else {
      console.error('ID parameter is missing or invalid');
    }
  }; 

  const handleDeleteAdmin = () => {
    const adminId = adminProfileData._id
      
    deleteAdmin(adminId);
  }

  const handleUpdateAdmin = () => {
    const adminId = adminProfileData._id;
    const updatedAdminData = {
      id: adminId,
      name,
      email,
      senha,
    }
    updateAdmin(updatedAdminData);
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
          placeholder={`${adminProfileData.name}`}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder={`${adminProfileData.email}`}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
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
          <Button onPress={handleUpdateAdmin} mode='contained'>Alterar</Button>
          <Button onPress={handleDeleteAdmin} mode='contained' buttonColor="#931603">Excluir</Button>
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

export default EditarAdministrador;
