import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const CadastroProfessor = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [materia, setMateria] = useState('');
  const [turno, setTurno] = useState('');
  const [numeroTurma, setNumeroTurma] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = () => {
    console.log({
      nomeCompleto,
      email,
      materia,
      turno,
      numeroTurma,
      senha,
      confirmarSenha,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Icon name="bars" size={24} color="#004AAD" />
        </TouchableOpacity>
        <Text style={{ color: '#004AAD', fontSize: 25, fontWeight: 700, }}>USUÁRIOS</Text>
        <TouchableOpacity>
          <Icon name="sign-in" size={24} color="#004AAD" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Cadastro de Professor</Text>
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
          placeholder="Matéria"
          value={materia}
          onChangeText={setMateria}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={turno}
            style={styles.picker}
            onValueChange={(itemValue) => setTurno(itemValue)}>
            <Picker.Item label="Turno" value="" />
            <Picker.Item label="Manhã" value="Manhã" />
            <Picker.Item label="Tarde" value="Tarde" />
            <Picker.Item label="Noite" value="Noite" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={numeroTurma}
            style={styles.picker}
            onValueChange={(itemValue) => setNumeroTurma(itemValue)}>
            <Picker.Item label="Número da Turma" value="" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
        </View>
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
          <Text style={styles.buttonAltText}>CADASTRAR PROFESSOR</Text>
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
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 70,
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
  },
  card: {
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
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
  pickerContainer: {
    height: 40,
    borderColor: '#004AAD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    width: '100%',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  buttonAlt: {
    backgroundColor: '#004AAD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonAltText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CadastroProfessor;
