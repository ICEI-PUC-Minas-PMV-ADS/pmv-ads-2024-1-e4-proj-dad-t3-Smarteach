import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const Configuracoes = () => {
    const [usuarios, setUsuarios] = useState({
        administradores: [
            { id: 1, nome: 'Administrador 1', email: 'admin1@example.com' },
            { id: 2, nome: 'Administrador 2', email: 'admin2@example.com' }
        ],
        professores: [
            { id: 1, nome: 'Professor 1', email: 'prof1@example.com', materia: 'Matemática', turno: 'Manhã', numeroTurma: 'A1' },
            { id: 2, nome: 'Professor 2', email: 'prof2@example.com', materia: 'Física', turno: 'Tarde', numeroTurma: 'B2' }
        ],
        alunos: [
            { id: 1, nome: 'Aluno 1', email: 'aluno1@example.com', turno: 'Manhã', numeroTurma: 'A1' },
            { id: 2, nome: 'Aluno 2', email: 'aluno2@example.com', turno: 'Tarde', numeroTurma: 'B2' }
        ]
    });

    const adicionarUsuario = (tipo) => {
        const novoUsuario = {
            id: usuarios[tipo].length + 1,
            nome: `Novo ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`,
            email: `${tipo.toLowerCase()}@example.com`,
            turno: '',
            numeroTurma: ''
        };
        setUsuarios({
            ...usuarios,
            [tipo]: [...usuarios[tipo], novoUsuario]
        });
    };

    const editarUsuario = (tipo, id) => {
        const usuarioEditado = usuarios[tipo].map(usuario => {
            if (usuario.id === id) {
                usuario.nome = 'Usuário Editado';
                usuario.email = 'editado@example.com';
                // Aqui pode adicionar a lógica para atualizar os dados específicos do tipo de usuário
                // Por exemplo:
                // if (tipo === 'professores') {
                //   usuario.materia = 'Nova Matéria';
                //   usuario.turno = 'Novo Turno';
                //   usuario.numeroTurma = 'Nova Turma';
                // }
            }
            return usuario;
        });
        setUsuarios({
            ...usuarios,
            [tipo]: usuarioEditado
        });
    };

    return (

        <ScrollView style={styles.body}>
            <Header />
            {Object.entries(usuarios).map(([tipo, listaUsuarios]) => (
                <View key={tipo} style={styles.section}>
                    <TouchableOpacity style={styles.sectionHeader}>
                        <Icon name="pencil" size={18} color="#fff" />
                        <Text style={styles.sectionHeaderText}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</Text>
                    </TouchableOpacity>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderText}>Nome</Text>
                        <Text style={styles.tableHeaderText}>Email</Text>
                        {tipo !== 'administradores' && (
                            <>
                                <Text style={styles.tableHeaderText}>Turno</Text>
                                <Text style={styles.tableHeaderText}>Número da Turma</Text>
                            </>
                        )}
                    </View>
                    {listaUsuarios.map(usuario => (
                        <View key={usuario.id} style={styles.usuarioItem}>
                            <TouchableOpacity style={styles.usuarioContent} onPress={() => editarUsuario(tipo, usuario.id)}>
                                <Text style={styles.usuarioText}>{usuario.nome}</Text>
                                <Text style={styles.usuarioTextEmail}>{usuario.email}</Text>
                                {tipo !== 'administradores' && (
                                    <>
                                        <Text style={styles.usuarioText}>{usuario.turno}</Text>
                                        <Text style={styles.usuarioText}>{usuario.numeroTurma}</Text>
                                    </>
                                )}
                            </TouchableOpacity>
                        </View>
                    ))}
                    <TouchableOpacity style={styles.addButton} onPress={() => adicionarUsuario(tipo)}>
                        <Text style={styles.addButtonText}>Cadastrar novo {tipo}</Text>
                    </TouchableOpacity>
                </View>
            ))}

        </ScrollView>
    );
};

const windowWidth =
    Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingBottom: 70,
        minHeight: windowHeight,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    section: {
        width: windowWidth * 0.9,
        marginBottom: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#004AAD',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    sectionHeaderText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        width: windowWidth * 0.8,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    tableHeaderText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#004AAD',
    },
    usuarioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    usuarioContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    usuarioText: {
        flex: 1,
        textAlign: 'center',
    },
    usuarioTextEmail: {
        fontWeight: '800',
        textAlign: 'center',
        

    },
    addButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#004AAD',
        textDecorationLine: 'underline',
    },
});

export default Configuracoes;