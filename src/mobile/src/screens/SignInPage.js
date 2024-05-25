import { Button } from "react-native-paper";
import { View, Image, StyleSheet } from "react-native";
import { Input } from '@rneui/themed';

const SignInPage = () => {
  return (
    <View style={styles.container}>
      <Image source={"/assets/SMARTEACH.png"} style={styles.image} />
      <Input placeholder="Nome Completo" inputContainerStyle={styles.input}/>
      <Input placeholder="E-mail" inputContainerStyle={styles.input}/>
      <Input placeholder="Senha" inputContainerStyle={styles.input} secureTextEntry={true} rightIcon={{ type: 'font-awesome', name: 'eye'}}/>
      <Input placeholder="Confirme a senha" inputContainerStyle={styles.input} secureTextEntry={true}  rightIcon={{ type: 'font-awesome', name: 'eye'}}/>
      <Button mode="outlined" style={styles.button}>
        CRIAR CONTA
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "8px",
    gap: 19,
    justifyContent: "center"
  },
  image: {
    width: 220,
    height: 53,
    resizeMode: "contain",
    marginBottom: "88px",
  },
  button: {
    borderRadius: 10,
    textColor: "#004AAD",
    borderColor: "#004AAD"
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderStyle: "solid",
    borderColor: "#004AAD",
    textColor: "#01436F"
  }
});

export default SignInPage;
