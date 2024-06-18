import React, { useEffect, useState } from "react";

import { Button, TextInput } from "react-native-paper";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import axios from "axios";
import Title from "../components/Title";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getClassList } from "../services/turmas.services";
import { Picker } from '@react-native-picker/picker';
import { register } from "../services/auth.services";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [ classList, setClassList ] = useState([]);
  const isFocused = useIsFocused();

  const fetchData = () => {
    getClassList().then((data) => setClassList(data));
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      register({
          name: name,
          email: email,
          password: password,
          class_number: classNumber,
        }).then(res => {
          if (res) {
            console.log(res)
            // navigation.goBack();
          } else {
            Alert.alert('Atenção!', 'Email/Senha inválidos')
          }
      });
    } catch (error) {
      console.log("erro");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.container}>
        <Title />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Nome"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          {/* <Picker
            selectedValue={selectedClass}
            onValueChange={(itemValue) => setSelectedClass(itemValue)}
            style={styles.picker}
          >
             {classList.map((turma) => (
                <Picker.Item key={turma.number} label={turma.number} value={turma.number} />
              ))}
          </Picker> */}
          
          <TextInput
            style={styles.input}
            onChangeText={setClassNumber}
            value={classNumber}
            placeholder="Turma"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Senha"
            textContentType='password'
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            onChangeText={setPasswordConfirmation}
            value={passwordConfirmation}
            placeholder="Confirmar senha"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            buttonColor="#004AAD"
            onPress={handleRegister}
          > Cadastrar </Button>
          <Button
            mode="contained"
            style={styles.button}
            buttonColor="#931603"
            onPress={() => navigation.goBack()}
          > Voltar </Button>
        </View>

        <Text style={{ fontSize: 16, textAlign: 'center', color: 'white', margin: 16 }}> Ou cadastre-se com </Text>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 12,
    color: '#fff',
  },
  picker: {
    margin: 12,
    color: 'black',
  },
  inputContainer: {
    margin: 16,
  },
  buttonContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  button: {
    marginBottom: 8,
    marginHorizontal: 16,
    fontWeight: '700',
  },
})

export default Cadastro;
