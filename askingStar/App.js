import TelaInicial from "./src/pages/telaInicial/telaInicial";
import Telalogin from "./src/pages/telaLogin/tela";
import TelaCadastro from "./src/pages/telaCadastro/telaCadastro";
import Perguntas from "./src/pages/CadastroPerguntas/index";
import Quiz from "./src/pages/telaQuiz/game";
import TelaJogar from "./src/pages/telaJogar/telaJogar";
import TelaMateria from "./src/pages/telaMateria/telaMateria";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Jogar"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Inicial" component={TelaInicial} />

          <Stack.Screen name="Cadastro" component={TelaCadastro} />

          <Stack.Screen name="Entrar" component={Telalogin} />

          <Stack.Screen name="Jogar" component={TelaJogar} />

          <Stack.Screen name="Materia" component={TelaMateria} />

          <Stack.Screen name="Game" component={Quiz} />

          <Stack.Screen name="Perguntas" component={Perguntas} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
