import TelaInicial from './src/pages/telaInicial/telaInicial';
import Telalogin from './src/pages/telaLogin/tela';
import TelaCadastro from './src/pages/telaCadastro/telaCadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName="ENTRAR" 
      screenOptions={
        {
          headerShown: false
        }
      }
 
      >

       <Stack.Screen name='INICIAL' component={TelaInicial} />
        
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        
        <Stack.Screen name="ENTRAR" component={Telalogin} />


      </Stack.Navigator>
    </NavigationContainer>


  
  );
};

export default App;
