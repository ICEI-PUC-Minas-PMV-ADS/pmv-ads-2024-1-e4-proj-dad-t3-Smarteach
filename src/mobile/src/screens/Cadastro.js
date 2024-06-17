import React, { useState } from "react";

import { Button, TextInput } from "react-native-paper";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Keyboard } from "react-native";

import axios from "axios";
import Title from "../components/Title";

const Cadastro = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [errors, setErrors] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleRegister = async () => {
    const newErrors = {};
    if (name.length < 3) {
      newErrors.name = "Por favor, insira o nome completo";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Por favor, insira um e-mail válido";
    }
    setErrors(newErrors);

    try {
      const response = await axios.post("http://localhost:5000/admin", {
        name,
        email,
        password,
      });
      const data = response.data;
      console.log("Usuario cadastrado", data);
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
