import TelaInicial from './src/pages/telaInicial/telaInicial';
import Telalogin from './src/pages/telaLogin/tela';
import TelaCadastro from './src/pages/telaCadastro/telaCadastro';
import Perguntas from './src/pages/CadastroPerguntas/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName="Inicial" 
      screenOptions={
        {
          headerShown: false
        }
      }
 
      >

        <Stack.Screen name='Perguntas' component={Perguntas} />

       <Stack.Screen name='Inicial' component={TelaInicial} />
        
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        
        <Stack.Screen name="Entrar" component={Telalogin} />


      </Stack.Navigator>
    </NavigationContainer>


  
  );
};

export default App;
