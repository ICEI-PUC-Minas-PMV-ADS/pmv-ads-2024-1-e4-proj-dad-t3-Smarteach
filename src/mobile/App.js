import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import FirstScreen from "./src/screens/FirstScreen";
import LoginPage from "./src/screens/LoginPage";
import SignInPage from "./src/screens/SignInPage";
import CadastroAdministrador from "./src/screens/CadastroAdministrador";
import CadastroProfessor from "./src/screens/CadastroProfessor";
import CadastroAluno from "./src/screens/CadastroAluno";
import EditarAdministrador from "./src/screens/EditarAdministrador";
import EditarProfessor from "./src/screens/EditarProfessor";
import EditarAluno from "./src/screens/EditarAluno";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/SMARTEACH.png")}
          style={{ width: 252, height: 100, resizeMode: "contain" }}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SignInPage" component={SignInPage} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroAdministrador" component={CadastroAdministrador} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroProfessor" component={CadastroProfessor} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroAluno" component={CadastroAluno} options={{ headerShown: false }}/>
        <Stack.Screen name="EditarAdministrador" component={EditarAdministrador} options={{ headerShown: false }}/>
        <Stack.Screen name="EditarProfessor" component={EditarProfessor} options={{ headerShown: false }}/>
        <Stack.Screen name="EditarAluno" component={EditarAluno} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
