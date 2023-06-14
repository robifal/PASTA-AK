import { View, Text } from "react-native";
import Constants from "expo-constants";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const Tab = createMaterialTopTabNavigator();

const TelaMateria = ({navigation}) =>{
  


    return (
  
  <View  style={{ 
        alignItems: "center",
        textAlign: 'center',
        backgroundColor:"#102261", 
        height: "25%", 
        width: "100%", 
        justifyContent: "center", 
        marginTop: Constants.statusBarHeight  }} >
            


            {/* const HomeScreen = (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Text>Home!</Text>
             </View>

            )  */}

            <Tab.Navigator>
                <Tab.Screen name="Materias" component={HomeScreen} />
                <Tab.Screen name="Dificuldade" component={TelaDificuldade} />
            </Tab.Navigator>
          
          </View>
    );
}


export default TelaMateria;