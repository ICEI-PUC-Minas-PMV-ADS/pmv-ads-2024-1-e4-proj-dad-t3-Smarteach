import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions, } from 'react-native';

import Header from '../components/Header';

export default function Mural() {
    return (
        <ScrollView style={styles.body}>
            <Header />
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{ height: 300, width: 340, marginTop: 130, backgroundColor: '#004AAD', borderRadius: 10, justifyContent: 'center', gap: 20,}}>
                        <Text style={{ marginLeft: 10, color: '#ffffff', fontWeight: 500, fontSize: 20, }}>Nome: Geremildo</Text>
                        <Text style={{ marginLeft: 10, color: '#ffffff', fontWeight: 500, fontSize: 20, }}>Tipo de Perfil: Administrador(a)</Text>
                        <Text style={{ marginLeft: 10, color: '#ffffff', fontWeight: 500, fontSize: 20, }}>Email: Administrador@homtmail.com</Text>
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
