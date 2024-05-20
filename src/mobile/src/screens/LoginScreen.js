import { Input, Text } from "@rneui/themed";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={"/assets/SMARTEACH.png"} style={styles.image} />
      <Input placeholder="E-mail" inputContainerStyle={styles.input} />
      <Input
        placeholder="Senha"
        inputContainerStyle={styles.input}
        secureTextEntry={true}
      />
      <Button mode="outlined" textColor="blue" style={styles.button}>
        <Text style={styles.buttonText}>
        ENTRAR
        </Text>
      </Button>
      <View style={styles.registerContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>
          Não possui uma conta?
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.loginText}>Criar</Text>
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
    marginTop: 60
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
  registerContainer: {
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

export default LoginScreen;
