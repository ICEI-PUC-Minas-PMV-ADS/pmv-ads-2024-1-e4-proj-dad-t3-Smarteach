import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/SMARTEACH.png")}
        style={styles.image}
      />
      <Button
        title="ENTRAR"
        buttonStyle={styles.button}
        titleStyle={{ fontWeight: "bold", fontSize: 18, color: "#004AAD" }}
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="CADASTRE-SE"
        buttonStyle={styles.button}
        titleStyle={{ fontWeight: "bold", fontSize: 18, color: "#004AAD" }}
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    marginBottom: 20,
  },
  image: {
    width: 220,
    height: 53,
    resizeMode: "contain",
    marginBottom: 88,
  },
  button: {
    width: "288px",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#004AAD",
    backgroundColor: "transparent",
    marginBottom: 19,
  },
});

export default FirstScreen;
