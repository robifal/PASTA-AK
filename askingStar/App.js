import TelaInicial from './src/pages/telaInicial/telaInicial';
import Telalogin from './src/pages/telaLogin/tela';
import TelaCadastro from './src/pages/telaCadastro/telaCadastro';
import Perguntas from './src/pages/CadastroPerguntas/index';
import Quiz from './src/pages/gameQuiz/game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName="Game" 
      screenOptions={
        {
          headerShown: false
        }
      }
 
      >

      <Stack.Screen name='Game' component={Quiz} />

        <Stack.Screen name='Perguntas' component={Perguntas} />

       <Stack.Screen name='Inicial' component={TelaInicial} />
        
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        
        <Stack.Screen name="Entrar" component={Telalogin} />


      </Stack.Navigator>
    </NavigationContainer>


  
  );
};

export default App;
