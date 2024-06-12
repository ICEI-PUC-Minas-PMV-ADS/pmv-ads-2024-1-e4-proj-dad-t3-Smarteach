import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Mural() {
  return (
    <><ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      
        <View style={{ flexDirection: 'row', gap: 80, marginTop: 40, alignItems: 'center', }}>
          <Image source={{ uri: 'https://img.icons8.com/?size=256&id=3096&format=png' }} style={{ width: 22, height: 22, }} />
          <Text style={{ color: '#004AAD', fontSize: 25, fontWeight: 700, }}>MURAL</Text>
          <Image source={{ uri: 'https://img.icons8.com/?size=256&id=2445&format=png' }} style={{ width: 22, height: 22, }} />
        </View>

        <View style={{ height: 2, width: 385, marginTop: 10, backgroundColor: '#004AAD', opacity: 0.35, }}></View>

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
                <Text style={{ fontSize: 23, color: 'white', fontWeight: 600, }}>Inglês</Text>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 500, }}>Marley</Text>
              </View>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 80, height: 50, }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 700, }}>26/05</Text>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: 200, }}>16:20-18:20</Text>
              </View>
            </View>
            <View style={{ marginTop: 4, gap: 10, }}>
              <Text style={{ alignSelf: 'center', fontWeight: 600, opacity: 0.85, fontSize: 20, }}>Immersion</Text>
              <Image source={{ uri: 'https://img.global.news.samsung.com/br/wp-content/uploads/2018/01/flip-samsung.png' }} style={{ alignSelf: 'center', width: 280, height: 150, borderRadius: 10, }} />
              <Image source={{ uri: 'https://img.icons8.com/?size=256&id=26139&format=png' }} style={{ alignSelf: 'center', width: 20, height: 20, }} />
            </View>
          </View>

        </View>
        <View style={{ marginTop: 35, height: 80, width: 385, backgroundColor: '#004AAD', justifyContent: 'center', borderEndEndRadius: 10, borderEndStartRadius: 10, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>
            <Image source={{ uri: 'https://img.icons8.com/?size=256&id=73&format=png' }} style={{ alignSelf: 'center', width: 35, height: 35, backgroundColor: 'white', borderRadius: 50, }} />
            <Image source={{ uri: 'https://img.icons8.com/?size=256&id=10053&format=png' }} style={{ alignSelf: 'center', width: 35, height: 35, }} />
            <Image source={{ uri: 'https://img.icons8.com/?size=256&id=12438&format=png' }} style={{ alignSelf: 'center', width: 35, height: 35, backgroundColor: 'white', borderRadius: 50, }} />
            <Image source={{ uri: 'https://img.icons8.com/?size=256&id=364&format=png' }} style={{ alignSelf: 'center', width: 35, height: 35, backgroundColor: 'white', borderRadius: 50, }} />
          </View>
        </View>
    </View>
    </ScrollView>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center'
  },
  body: {

  },

});
