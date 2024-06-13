import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

import CadastroAdministrador from './CadastroAdministrador';
import CadastroAluno from './CadastroAluno';
import CadastroProfessor from './CadastroProfessor';
import EditarAdministrador from './EditarAdministrador';
import EditarAluno from './EditarAluno';
import EditarProfessor from './EditarProfessor';
import FirstScreen from './FirstScreen';
import HomeScreen from './HomeScreen';
import LoginPage from './LoginPage';
import Mural from './Mural';
import SignInPage from './SignInPage';

const Barnav = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'mural', title: 'Mural', icon: 'silverware-fork-knife' },
    { key: 'login', title: 'TelaLogin', icon: 'cart' },
    { key: 'signin', title: 'Cadastro', icon: 'clipboard-text' },
    { key: 'first', title: 'PrimeiraTela', icon: 'heart' },
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    menu: Mural,
    cart: LoginPage,
    pedidos: SignInPage,
    favoritos: FirstScreen,
  });

  return (
    <View>
        <Text>Olá mundo</Text>
    <BottomNavigation
      barStyle={{ backgroundColor: '#1B1B1B' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </View>
  )
};

export default Barnav;