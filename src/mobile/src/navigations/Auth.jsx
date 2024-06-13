import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from "../screens/LoginPage";
import FirstScreen from '../screens/FirstScreen';
import Cadastro from '../screens/Cadastro';


const { Navigator, Screen } = createNativeStackNavigator();

const Auth = () => {

    return (
        <Navigator initialRouteName=''>
            <Screen
                name='Inicial'
                component={FirstScreen}
                options={{
                    header: () => null,
                }}
            />
            <Screen
                name='Login'
                component={LoginPage}
                options={{
                    header: () => null,
                }}
            />
            <Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    header: () => null,
                }}
            />
        </Navigator>
    );
}

export default Auth;