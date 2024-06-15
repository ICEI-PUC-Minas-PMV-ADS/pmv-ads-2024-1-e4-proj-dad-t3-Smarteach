import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, Modal } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const materias=['Matéria','Matéria1','Matéria2','Matéria3'];
const turmas=['turma','turma1','turma2','turma3'];

const EditarProfessor = () => {
  const [materia,setMateria] = useState();
  const [turma,setTurma] = useState();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const handleSubmit = () => {
    setModalVisible(true);
  };
const handleValueChange=(itemValue, itemIndex) =>setMateria(itemValue)
const handleValueChange1=(itemValue1, itemIndex) =>setTurma(itemValue1)
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
      
        <Text style={styles.subtitle}>Atualizar Professor</Text>
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
        <View style={styles.inputPicker}>
        <Picker
        style={styles.picker}
        selectedValue={materia}
        onValueChange={handleValueChange}>
          {
            materias.map(materia=> <Picker.Item key={materia} label={materia} value={materia}/>)
          }
        </Picker>
        </View>

        <View style={styles.inputPicker}>
        <Picker
        style={styles.picker}
        selectedValue={turma}
        onValueChange={handleValueChange1}>
          {
            turmas.map(turma=> <Picker.Item key={turma} label={turma} value={turma}/>)
          }
        </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Turma"
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
          <Text style={styles.buttonDelText}>DELETAR PROFESSOR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="th-large" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="calendar" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="user" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="cog" size={24} color="#fff" />
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
  inputPicker: {
    height: 50,
    borderColor: '#004AAD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
  },
  picker: {
    height: 50,
    marginLeft: -10,
    textAlign: 'Left'
  },
  buttonAlt: {
    padding: 10,
    borderWidth:1,
    borderColor: '#004AAD',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
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
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#004AAD',
    justifyContent: 'space-around',
    paddingVertical: 20, // Aumentando o espaço para o footer
  },
  footerButton: {
    alignItems: 'center',
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

export default EditarProfessor;
