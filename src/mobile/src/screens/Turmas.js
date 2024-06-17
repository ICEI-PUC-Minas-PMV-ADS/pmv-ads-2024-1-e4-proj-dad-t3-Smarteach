import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

export default function HomeScreen() {

  return (
    <ScrollView style={styles.body}>
      <Header />
      <View style={styles.container}>
        <View contentContainerStyle={styles.scrollContainer}>
          <View style={{ gap: 30, marginTop: 10, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', }}>
            <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center', }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#004AAD", }}>Mural</Text>
              <Image src="https://img.freepik.com/vetores-gratis/formulas-cientificas-na-lousa_23-2148494010.jpg"
                style={{ height: 100, width: 150, borderRadius: 10, marginTop: 5, }} />
            </View>

            <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center', }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#004AAD", }}>Mural</Text>
              <Image src="https://img.freepik.com/vetores-gratis/formulas-cientificas-na-lousa_23-2148494010.jpg"
                style={{ height: 100, width: 150, borderRadius: 10, marginTop: 5, }} />
            </View>
          </View>

          <View>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15, }}>
              <TouchableOpacity style={styles.iconButton}>
              <Icon name="calendar" size={24} color="#004AAD" />
              </TouchableOpacity>
              <Text style={{ fontWeight: "bold", fontSize: 18, color: "#004AAD", }}>Turma 101</Text>
              <TouchableOpacity style={styles.iconButton}>
              <Icon name="book" size={24} color="#004AAD" />
              </TouchableOpacity>
            </View>
            <Image src="https://img.freepik.com/free-photo/medium-shot-kids-cheating-school_23-2150256554.jpg"
              style={{ width: '90%', height: 150, marginTop: 15, borderRadius: 10, alignSelf: 'center' }} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
  },
});