import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useUser } from "../context/UserContex";

export default function UserProfile() {
  const { name, signed, role, email } = useUser();

  let profileType;
  switch (role) {
    case "professor":
      profileType = "Professor(a)";
      break;
    case "aluno":
      profileType = "Aluno(a)";
      break;
    case "admin":
      profileType = "Administrador(a)";
      break;
    default:
      profileType = "Tipo de Perfil Indefinido";
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://github.com/shadcn.png" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.text}>
            <strong>Nome:</strong> {name}
          </Text>
          <Text style={styles.text}>
            <strong>Tipo de Perfil:</strong> {profileType}
          </Text>
          <Text style={styles.text}>
            <strong>Email:</strong> {email}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingBottom: 70,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    profileContainer: {
      width: 300,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
    },
    info: {
      fontSize: 16,
      marginVertical: 2,
    },
    email: {
      fontSize: 14,
      color: "#007bff",
      marginTop: 10,
    },
  });
  