import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions, } from 'react-native';

import Header from '../components/Header';

export default function Usuarios() {
  return (
    <ScrollView style={styles.body}>
      <Header title={'Usuários'}/>
      <View style={styles.container}>
        <View style={styles.main}>
            <View>
                <Text> Administradores </Text>
            </View>
            <View>
                <Text> Professores </Text>
            </View>
            <View>
                <Text> Alunos </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  main: {
  },
});
