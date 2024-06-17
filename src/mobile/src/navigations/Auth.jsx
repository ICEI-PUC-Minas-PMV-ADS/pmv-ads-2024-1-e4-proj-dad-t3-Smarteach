import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/Login";
import Inicial from '../screens/Inicial';
import Cadastro from '../screens/Cadastro';


const { Navigator, Screen } = createNativeStackNavigator();

const Auth = () => {

    return (
        <Navigator initialRouteName=''>
            <Screen
                name='Inicial'
                component={Inicial}
                options={{
                    header: () => null,
                }}
            />
            <Screen
                name='Login'
                component={Login}
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