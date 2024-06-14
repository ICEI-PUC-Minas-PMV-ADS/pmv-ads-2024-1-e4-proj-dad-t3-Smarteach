import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions, Modal, } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Mural() {
  return (
    <><ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.navbar}>
        <TouchableOpacity>
          <Icon name="bars" size={28} color="#004AAD" />
        </TouchableOpacity>
        <Text style={{ color: '#004AAD', fontSize: 25, fontWeight: 700, }}>MURAL</Text>
        <TouchableOpacity>
          <Icon name="sign-in" size={28} color="#004AAD" />
        </TouchableOpacity>
      </View>

        <View style={{ height: 2, width: '100%', marginTop: 10, backgroundColor: '#004AAD', opacity: 0.35, }}></View>

        <View style={{ flex: 1, alignItems: 'center', }}>
          <View style={{ height: 35, width: 340, marginTop: 12, backgroundColor: '#004AAD', borderRadius: 10, justifyContent: 'center', }}>
            <Text style={{ marginLeft: 10, color: '#ffffff', fontWeight: 800, fontSize: 23, }}>Turma 101</Text>
          </View>

          <View style={{ height: 280, width: 310, marginTop: 15, borderColor: '#BEBEBE', borderWidth: 1, borderRadius: 10, backgroundColor: '#F4F4F4', }}>
            <View style={{ height: 55, width: 310, backgroundColor: '#004AAD', borderRadius: 10, justifyContent: 'center', flexDirection: 'row', gap: 100, }}>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 80, height: 50, }}>
                <Text style={{ fontSize: 23, color: 'white', fontWeight: 600, }}>Música</Text>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 500, }}>Nancy</Text>
              </View>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 80, height: 50, }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 700, }}>25/04</Text>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: 200, }}>08:00-10:00</Text>
              </View>
            </View>
            <View style={{ marginTop: 4, gap: 10, }}>
              <Text style={{ alignSelf: 'center', fontWeight: 600, opacity: 0.85, fontSize: 20, }}>Para casa: Partitura II</Text>
              <Image source={{ uri: 'https://img.global.news.samsung.com/br/wp-content/uploads/2018/01/flip-samsung.png' }} style={{ alignSelf: 'center', width: 280, height: 150, borderRadius: 10, }} />
              <Image source={{ uri: 'https://img.icons8.com/?size=256&id=26139&format=png' }} style={{ alignSelf: 'center', width: 20, height: 20, }} />
            </View>
          </View>

          <View style={{ height: 280, width: 310, marginTop: 15, borderColor: '#BEBEBE', borderWidth: 1, borderRadius: 10, backgroundColor: '#F4F4F4', }}>
            <View style={{ height: 55, width: 310, backgroundColor: '#004AAD', borderRadius: 10, justifyContent: 'center', flexDirection: 'row', gap: 100, }}>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 80, height: 50, }}>
                <Text style={{ fontSize: 23, color: 'white', fontWeight: 600, }}>Arte</Text>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 500, }}>Kendrick</Text>
              </View>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 80, height: 50, }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 700, }}>25/04</Text>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: 200, }}>11:00-12:00</Text>
              </View>
            </View>
            <View style={{ marginTop: 4, gap: 10, }}>
              <Text style={{ alignSelf: 'center', fontWeight: 600, opacity: 0.85, fontSize: 20, }}>Aula: Pintura II</Text>
              <Image source={{ uri: 'https://img.global.news.samsung.com/br/wp-content/uploads/2018/01/flip-samsung.png' }} style={{ alignSelf: 'center', width: 280, height: 150, borderRadius: 10, }} />
              <Image source={{ uri: 'https://img.icons8.com/?size=256&id=26139&format=png' }} style={{ alignSelf: 'center', width: 20, height: 20, }} />
            </View>
          </View>
          
          <View style={{ height: 280, width: 310, marginTop: 15, borderColor: '#BEBEBE', borderWidth: 1, borderRadius: 10, backgroundColor: '#F4F4F4', }}>
            <View style={{ height: 55, width: 310, backgroundColor: '#004AAD', borderRadius: 10, justifyContent: 'center', flexDirection: 'row', gap: 100, }}>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 80, height: 50, }}>
                <Text style={{ fontSize: 23, color: 'white', fontWeight: 600, }}>Arte</Text>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 500, }}>Kendrick</Text>
              </View>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 80, height: 50, }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 700, }}>25/04</Text>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: 200, }}>11:00-12:00</Text>
              </View>
            </View>
            <View style={{ marginTop: 4, gap: 10, }}>
              <Text style={{ alignSelf: 'center', fontWeight: 600, opacity: 0.85, fontSize: 20, }}>Aula: Pintura II</Text>
              <Image source={{ uri: 'https://img.global.news.samsung.com/br/wp-content/uploads/2018/01/flip-samsung.png' }} style={{ alignSelf: 'center', width: 280, height: 150, borderRadius: 10, }} />
              <Image source={{ uri: 'https://img.icons8.com/?size=256&id=26139&format=png' }} style={{ alignSelf: 'center', width: 20, height: 20, }} />
            </View>
          </View>

        </View>

      </View>
    </ScrollView>
    </>

  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff', 
    minHeight: windowHeight,
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
});
