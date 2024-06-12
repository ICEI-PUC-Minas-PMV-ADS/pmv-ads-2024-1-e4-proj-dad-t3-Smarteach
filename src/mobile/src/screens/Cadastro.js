import React, { useState } from "react";

import { Button } from "react-native-paper";
import { StyleSheet, View, Text, Image } from "react-native";
import { Input } from "@rneui/themed";
import axios from "axios";

const SignInPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
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
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={"/assets/SMARTEACH.png"} style={styles.image} />
        <Input
          placeholder="  Nome Completo"
          inputContainerStyle={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Input
          placeholder="  E-mail"
          inputContainerStyle={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="  Senha"
          inputContainerStyle={styles.input}
          secureTextEntry={true}
          rightIcon={{ type: "font-awesome", name: "eye" }}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <Input
          placeholder="  Confirme a senha"
          inputContainerStyle={styles.input}
          secureTextEntry={true}
          rightIcon={{ type: "font-awesome", name: "eye" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button mode="outlined" style={styles.button} onPress={handleRegister}>
          <Text style={styles.modalText}>CRIAR CONTA</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 70,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    alignItems: "center",
    shadowColor: "#004AAD",
  },
  image: {
    width: 220,
    height: 53,
    resizeMode: "contain",
    marginBottom: "88px",
  },
  button: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#004AAD",
    borderColor: "#004AAD",
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    shadowOffset: { width: 1, height: 1 },
  },
  input: {
    height: 40,
    borderColor: "#004AAD",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    width: "100%",
    shadowOffset: { width: 1, height: 1 },
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
  },
});

export default SignInPage;
