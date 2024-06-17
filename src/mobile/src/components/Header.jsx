import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { useUser } from '../context/UserContex';

export default Header = ({goBack}) => {
  const { setSigned } = useUser();

    return (
      <Appbar.Header style={styles.header}>
        <Appbar.Action iconColor="white" icon="menu" onPress={() => {}} />
        {
          goBack && 
          <Appbar.BackAction iconColor="white" onPress={goBack} />
        }
        <Appbar.Content color="white" title="Smarteach" />
        <Appbar.Action iconColor="white" icon="logout" onPress={() => setSigned(false)} />
      </Appbar.Header>
    );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#004AAD',
  },
  
})
  