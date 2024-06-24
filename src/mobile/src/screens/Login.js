import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { login } from "../services/auth.services";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import { useUser } from "../context/UserContex";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const { setSigned, setName, setRole } = useUser();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    setError("");
    try {
      const res = await login({
        email: email,
        password: password,
      });

      if (res) {
        setSigned(true);
        setName(res.name);
        setRole(res.user_level);
      } else {
        Alert.alert("Atenção!", "Email/Senha inválidos");
      }
    } catch (err) {
      Alert.alert(
        "Erro",
        "Algo deu errado. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Title />
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
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            textColor="white"
            buttonColor="#004AAD"
            onPress={handleLogin}
          >
            Fazer Login
          </Button>
          <Button
            mode="contained"
            style={styles.button}
            textColor="white"
            buttonColor="#931603"
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    margin: 12,
    color: "#000",
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
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default Login;
