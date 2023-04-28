
import React, { useState } from 'react';
import { ImageBackground, Button, Text, TextInput, StyleSheet, View , Image} from 'react-native';
import Telalogin from './src/Components/telaLogin/tela';
import TelaCadastro from './src/Components/telaCadastro/telaCadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="CADASTRO" component={TelaCadastro} />


        <Stack.Screen name="ENTRAR" component={Telalogin} />
        
      </Stack.Navigator>
    </NavigationContainer>


  
  );
};

export default App;
