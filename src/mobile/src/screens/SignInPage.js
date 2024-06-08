import { Button } from "react-native-paper";
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Dimensions, Modal, Image } from 'react-native';
import { Input } from '@rneui/themed';

const SignInPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image source={"/assets/SMARTEACH.png"} style={styles.image} />
      <Input placeholder="  Nome Completo" inputContainerStyle={styles.input}/>
      <Input placeholder="  E-mail" inputContainerStyle={styles.input}/>
      <Input placeholder="  Senha" inputContainerStyle={styles.input} secureTextEntry={true} rightIcon={{ type: 'font-awesome', name: 'eye'}}/>
      <Input placeholder="  Confirme a senha" inputContainerStyle={styles.input} secureTextEntry={true}  rightIcon={{ type: 'font-awesome', name: 'eye'}}/>
      <Button mode="outlined" style={styles.button}>
      <Text style={styles.modalText}>CRIAR CONTA</Text>
      </Button>
      </View>
    </View>
  );
};
const windowWidth = 414//Dimensions.get('window').width;
const windowHeight = 896//Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.1,
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 70, // Aumentando o espaço para o footer
    minHeight: windowHeight,
    alignItems: 'center',
  },
  card: {
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
    shadowColor: '#004AAD'
  },
  image: {
    width: 220,
    height: 53,
    resizeMode: "contain",
    marginBottom: "88px",
  },
  button: {
    padding: 10,
    borderWidth:1,
    backgroundColor: '#004AAD',
    borderColor: '#004AAD',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: windowHeight * 0.2,
    width: '100%',
    shadowOffset: { width: 1, height: 1 },
  },
  input: {
    height: 40,
    borderColor: '#004AAD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    shadowOffset: { width: 1, height: 1 },
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    textAlign: 'center', // Adiciona alinhamento ao centro para o texto
  },
});

export default SignInPage;
