import { View, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { Text } from "@rneui/themed";

function FirstScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Image
          StyleSheet
          source={"/assets/SMARTEACH.png"}
          style={{ width: 252, height: 100, resizeMode: "contain" }}
        />
      ) : (
        <>
          <Image source={"/assets/SMARTEACH.png"} style={styles.image} />
          <Button
            mode="outlined"
            textColor="blue"
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </Button>
          <Button
            mode="outlined"
            textColor="blue"
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>CRIAR CONTA</Text>
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
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
  buttonText: {
    color: "#004AAD",
    fontWeight: 800,
    alignItems: "center",
    fontSize: "18px",
  },
});

export default FirstScreen;
