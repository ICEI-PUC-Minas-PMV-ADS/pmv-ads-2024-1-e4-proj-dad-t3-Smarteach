import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import CadastroAdministrador from './CadastroAdministrador';
import CadastroAluno from './CadastroAluno';
import CadastroProfessor from './CadastroProfessor';
import EditarAdministrador from './EditarAdministrador';
import EditarAluno from './EditarAluno';
import EditarProfessor from './EditarProfessor';
import LoginPage from './LoginPage';
import Mural from './Mural';


const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#004AAD',
          borderTopWidth: 0,
          height: 55,
        }

      }}>

      <Tab.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){ return <Icon name='home' size={size} color ='#2E2E2E'/>}
            return <Icon name='home' size={size} color ='white'/>
          }
        }}
      />

      <Tab.Screen
        name="Mural"
        component={Mural}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){ return <Icon name='calendar' size={size} color ='#2E2E2E'/>}
            return <Icon name='calendar' size={size} color ='white'/>
          }
        }}
        
      />

      <Tab.Screen
        name="CadastroAdministraor"
        component={CadastroAdministrador}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){ return <Icon name='user' size={size} color ='#2E2E2E'/>}
            return <Icon name='user' size={size} color ='white'/>
          }
        }}
      />

      <Tab.Screen
        name="EditarAdministrador"
        component={EditarAdministrador}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){ return <Icon name='gear' size={size} color ='#2E2E2E'/>}
            return <Icon name='gear' size={size} color ='white'/>
          }
        }}
      />

    </Tab.Navigator>
  )
}

export default Routes;