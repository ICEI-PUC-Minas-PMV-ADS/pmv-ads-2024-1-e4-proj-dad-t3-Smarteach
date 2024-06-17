import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Title = () => {

    return <Text style={styles.title}> Smarteach </Text>

}

const styles = StyleSheet.create({
    title: {
        fontSize: 42,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#004AAD',
      },
})

export default Title;