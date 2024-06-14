import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ onExitPress, onSettingsPress, Calendario, Mural }) => {
  const turma = '111'
  return (
    <View style={styles.container}>
       <View style={styles.navbar}>
        <TouchableOpacity>
          <Icon name="bars" size={28} color="#004AAD" />
        </TouchableOpacity>
        <Text style={{ color: '#004AAD', fontSize: 25, fontWeight: 700, }}>MURAL</Text>
        <TouchableOpacity>
          <Icon name="sign-in" size={28} color="#004AAD" />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.boxUp}>
              <View>
                <View style={styles.titleUp}>
                  <Text style={{ fontWeight: "bold", fontSize: 18, color: "#004AAD" }}>Mural</Text>
                </View>
                <Image
                  src="https://img.freepik.com/vetores-gratis/formulas-cientificas-na-lousa_23-2148494010.jpg"
                  style={styles.bodyUpImage}
                />
              </View>
              <View>
                <View style={styles.titleUp1}>
                  <Text style={{ fontWeight: "bold", fontSize: 18, color: "#004AAD", }}>Cronograma</Text>
                </View>
                <Image
                  src="https://img.freepik.com/vetores-gratis/formulas-cientificas-na-lousa_23-2148494010.jpg"
                  style={styles.bodyUpImage}
                />
              </View>
            </View>
            <View style={{ marginLeft: '-7%' }}>
              <View style={styles.bloco}>
                <View style={styles.title}>
                  <TouchableOpacity style={styles.iconButton} onPress={Calendario}>
                    <Icon name="calendar" size={24} color="Black" />
                  </TouchableOpacity>
                  <Text style={{ fontWeight: "bold", fontSize: 18, color: "#004AAD", }}>Turma {turma}</Text>
                  <TouchableOpacity style={styles.iconButton} onPress={Mural}>
                    <Icon name="book" size={24} color="Black" />
                  </TouchableOpacity>
                </View>
                <Image
                  src="https://img.freepik.com/free-photo/medium-shot-kids-cheating-school_23-2150256554.jpg"
                  style={styles.bodyImage}
                />
              </View>
              <View>
                <View style={styles.bloco1}>
                  <View style={styles.title1}>
                    <TouchableOpacity style={styles.iconButton} onPress={Calendario}>
                      <Icon name="calendar" size={24} color="Black" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "bold", fontSize: 18, color: "#004AAD", }}>Turma {turma}</Text>
                    <TouchableOpacity style={styles.iconButton} onPress={Mural}>
                      <Icon name="book" size={24} color="Black" />
                    </TouchableOpacity>
                  </View>
                  <Image
                    src="https://img.freepik.com/free-photo/medium-shot-kids-cheating-school_23-2150256554.jpg"
                    style={styles.bodyImage1}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 70, // Aumentando o espaço para o footer
    minHeight: 100,
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20, // Aumentando o espaço para o header
    paddingHorizontal: 20,
    marginTop: 25,
  },


  box: {
    position: 'absolute',
    borderColor: '#004AAD',
    borderBottomWidth: 2,
    marginLeft: 120,
    marginBottom: 40,
    marginTop: 100,
  },
  bloco: {
    marginTop: 60,
    marginLeft: 120,
    marginBottom: -20
  },
  bloco1: {
    marginLeft: 120,
  },
  boxUp: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 40
  },
  titleUp: {
    flexDirection: 'row',
    textAlign: 'center',
    marginLeft: '35%'
  },
  titleUp1: {
    flexDirection: 'row',
    textAlign: 'center',
    marginLeft: '20%'
  },
  title: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    marginTop: '20%',
  },
  title1: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    marginTop: '25%',
  },
  bodyUpImage: {
    height: 100, // Altura da imagem central
    width: 150,
    marginBottom: '-40%',
    marginHorizontal: 15,
    borderRadius: 10,
  },
  bodyImage: {
    width: '65%', // Largura da imagem central
    height: 150, // Altura da imagem central
    resizeMode: 'contain',
    marginTop: 90,
    marginBottom: -40,
    borderRadius: 10,
  },
  bodyImage1: {
    width: '65%', // Largura da imagem central
    height: 150, // Altura da imagem central
    resizeMode: 'contain',
    marginTop: 110,
    borderRadius: 10,
  },
  logo: {
    width: 150, // Largura da imagem central
    height: 60, // Altura da imagem central
    resizeMode: 'contain',
  },
  iconButton: {
    marginHorizontal: 15
  },
});

export default HomeScreen;