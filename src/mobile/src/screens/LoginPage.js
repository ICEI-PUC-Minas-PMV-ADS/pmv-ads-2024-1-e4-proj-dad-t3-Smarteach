import React, { useState } from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { login } from "../services/auth.services";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    login({
      email: email,
      password: password,
    }).then(res => {
      console.log(res)
      // if (res && res.user) {
      //   setSigned(true);
      //   setName(res.user.name);
      // } else {
      //   Alert.alert('Atenção!', 'Email/Senha inválidos')

      // }
    });

  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/SMARTEACH.png")}
        style={styles.image}
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
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        title="ENTRAR"
        buttonStyle={styles.button}
        titleStyle={{ fontWeight: "bold", fontSize: 18, color: "#004AAD" }}
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 53,
    resizeMode: "contain",
    marginBottom: 88,
  },
  button: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#004AAD",
    backgroundColor: "transparent",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "#004AAD",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    width: "100%",
  },
});

export default LoginPage;
