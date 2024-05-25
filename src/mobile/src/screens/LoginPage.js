import { Button } from "react-native-paper";
import { View, Image, StyleSheet } from "react-native";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image source={"/assets/SMARTEACH.png"} style={styles.image} />
      <Button mode="outlined" textColor="blue" style={styles.button}>
        ENTRAR
      </Button>
      <Button mode="outlined" textColor="blue" style={styles.button}>
        CRIAR CONTA
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "8px",
    gap: 19,
  },
  image: {
    width: 220,
    height: 53,
    resizeMode: "contain",
    marginBottom: "88px",
  },
  button: {
    borderRadius: 10,
    textColor: "#004AAD"
  },
});

export default LoginPage;
