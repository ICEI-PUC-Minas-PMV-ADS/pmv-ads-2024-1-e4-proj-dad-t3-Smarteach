import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { useUser } from '../context/UserContex';

export default Header = ({title}) => {
  const { setSigned } = useUser();

    return (
      <Appbar.Header style={styles.header} mode="center-aligned">
        <Appbar.Action iconColor="#004AAD" icon="menu" onPress={() => {}} />
        <Appbar.Content color="#004AAD" title={title} titleStyle={{ fontWeight: 'bold'}} />
        <Appbar.Action iconColor="#004AAD" icon="logout" onPress={() => setSigned(false)} />
      </Appbar.Header>
    );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#004AAD',
    borderBottomWidth: 2,
  }
})
  