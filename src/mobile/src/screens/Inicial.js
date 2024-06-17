import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Inicial = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text style={styles.title}> Smarteach </Text>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            textColor='white'
            buttonColor="#004AAD"
            onPress={() => navigation.navigate('Login')}
        > Login</Button>
          <Button
            mode="contained"
            style={styles.button}
            textColor='white'
            buttonColor="#004AAD"
            onPress={() => navigation.navigate('Cadastro')}
          > Cadastro </Button>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: "100%",
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    textAlign: 'center',
    paddingVertical: 32,
    fontWeight: 'bold',
    color: '#004AAD',
  },
  buttonContainer: {
    marginHorizontal: 24,
  },
  button: {
    marginBottom: 12,
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
})

export default Inicial;
