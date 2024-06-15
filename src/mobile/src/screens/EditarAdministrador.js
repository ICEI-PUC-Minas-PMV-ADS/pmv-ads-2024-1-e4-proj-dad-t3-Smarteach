import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const EditarAdministrador = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Icon name="bars" size={28} color="#004AAD" />
        </TouchableOpacity>
        <Text style={{ color: '#004AAD', fontSize: 25, fontWeight: 700, }}>USUÁRIOS</Text>
        <TouchableOpacity>
          <Icon name="sign-in" size={28} color="#004AAD" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Atualizar Administrador</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
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
        <TouchableOpacity style={styles.buttonAlt} onPress={handleSubmit}>
          <Text style={styles.buttonAltText}>ALTERAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDelAlt} onPress={handleSubmit}>
          <Text style={styles.buttonDelText}>DELETAR ADMINISTRADOR</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Icon name="times" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Cadastro atualizado com sucesso!</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const handleSubmit = () => {
  setModalVisible(true);
};

let data = {
    "name":"Flap Jack",
  "email": "flepinho@mail.com",
  "password": 123456,
  "class_number": 350
}

const name = data.name
const email = data.email
const password = data.password
const class_number = data.class_number

//const response = await axios.post($(baseUrl)/student, {
//    name,
//    email,
//    password,
//    class_number
//  });
//
//console.log(response.data)


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 70, // Aumentando o espaço para o footer
    minHeight: windowHeight,
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20, // Aumentando o espaço para o header
    paddingHorizontal: 20,
    marginTop: 25,
    borderColor: '#004AAD',
    borderBottomWidth: 2,
  },
  navbarTitle: {
    color: '#004AAD',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.1
  },
  card: {
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#004AAD',
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004AAD',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#004AAD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
  },
  buttonAlt: {
    padding: 10,
    borderWidth:1,
    borderColor: '#004AAD',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: windowHeight * 0.2,
    width: '100%',
  },
  buttonDelAlt: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    borderWidth:  2,
    borderColor:'red',
  },
  buttonAltText: {
    color: '#004AAD',
    fontSize: 16,
    textAlign: 'center', // Centraliza o texto
  },
  buttonDelText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center', // Centraliza o texto
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: windowWidth * 0.8,
    backgroundColor: '#004AAD',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    textAlign: 'center', // Adiciona alinhamento ao centro para o texto
  },
});

export default EditarAdministrador;
