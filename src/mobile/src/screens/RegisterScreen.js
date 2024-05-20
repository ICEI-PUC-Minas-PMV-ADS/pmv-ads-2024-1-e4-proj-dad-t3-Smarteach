import { Input, Text } from "@rneui/themed";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {
  const [isEyeOpen, setIsEyeOpen] = useState();

  return (
    <View style={styles.container}>
      <Image source={"/assets/SMARTEACH.png"} style={styles.image} />
      <Input placeholder="Nome Completo" inputContainerStyle={styles.input} />
      <Input placeholder="E-mail" inputContainerStyle={styles.input} />
      <Input
        placeholder="Senha"
        inputContainerStyle={styles.input}
        secureTextEntry={!isEyeOpen}
        rightIcon={{
          type: "font-awesome",
          name: isEyeOpen ? "eye-slash" : "eye",
          onPress: () => setIsEyeOpen(!isEyeOpen),
        }}
      />
      <Input
        placeholder="Confirme a senha"
        inputContainerStyle={styles.input}
        secureTextEntry={!isEyeOpen}
        rightIcon={{
          type: "font-awesome",
          name: isEyeOpen ? "eye-slash" : "eye",
          onPress: () => setIsEyeOpen(!isEyeOpen),
        }}
      />
      <Button mode="outlined" style={styles.button}>
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
      </Button>
      <View style={styles.loginContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>
          Já possui uma conta?
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </Text>
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "10px",
    gap: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 53,
    resizeMode: "contain",
    marginBottom: "88px",
  },
  button: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#004AAD",
    width: "288px",
  },
  input: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#004AAD",
    borderRadius: 10,
    height: "50px",
    padding: 10,
  },
  text: {
    color: "#004AAD",
    fontSize: "14px",
  },
  buttonText: {
    color: "#004AAD",
    fontWeight: 800,
    alignItems: "center",
    fontSize: "18px",
  },
  loginContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  loginText: {
    fontWeight: "800",
    color: "#004AAD",
    padding: "5px",
  },
  line: {
    flex: 1,
    width: 39,
    height: 0.5,
    backgroundColor: "#004AAD",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default RegisterScreen;
