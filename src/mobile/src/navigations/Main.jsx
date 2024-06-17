import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Turmas from '../screens/Turmas';
import CadastroAdministrador from './../screens/CadastroAdministrador';
import CadastroAluno from './../screens/CadastroAluno';
import CadastroProfessor from './../screens/CadastroProfessor';
import EditarAluno from './../screens/EditarAluno';
import EditarProfessor from './../screens/EditarProfessor';
import EditarAdministrador from './../screens/EditarAdministrador';
import Mural from './../screens/Mural';

const Stack = createNativeStackNavigator();

const Main = () => {

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='Turmas'
                component={Turmas}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='CadastroAdmin'
                component={CadastroAdministrador}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='CadastroAluno'
                component={CadastroAluno}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='CadastroProfessor'
                component={CadastroProfessor}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='EditarAluno'
                component={EditarAluno}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='EditarProfessor'
                component={EditarProfessor}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='EditarAdmin'
                component={EditarAdministrador}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name='Mural'
                component={Mural}
                options={{
                    header: () => null,
                }}
            />
        </Stack.Navigator>
    );
}

export default Main;