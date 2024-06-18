import React, { useState } from "react";
import { View, Image, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button, Text, TextInput } from 'react-native-paper';
import { login } from "../services/auth.services";
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/UserContex';
import Title from "../components/Title";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { setSigned, setName } = useUser();

  const handleLogin = () => {
    setSigned(true);
    // login({
    //   email: email,
    //   password: password,
    // }).then(res => {
    //   if (res) {
    //     setSigned(true);
    //     setName(res.user?.name);
    //   } else {
    //     Alert.alert('Atenção!', 'Email/Senha inválidos')
    //   }
    // });
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.container}>
        <Title/>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            textColor='white'
            buttonColor="#004AAD"
            onPress={handleLogin}
        > Fazer Login</Button>
          <Button
            mode="contained"
            style={styles.button}
            textColor='white'
            buttonColor="#931603"
            onPress={() => navigation.goBack()}
          > Voltar </Button>
        </View>
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
    marginHorizontal: 24,
  },
  button: {
    marginBottom: 12,
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
})

export default Login;
