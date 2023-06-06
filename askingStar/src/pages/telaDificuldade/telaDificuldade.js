import { View, Text } from "react-native";
import Constants from "expo-constants";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();



const TelaDificuldade = ({navigation}) =>{
  


    return (
  
  <View  style={{ 
        alignItems: "center",
        textAlign: 'center',
        backgroundColor:"#102261", 
        height: "25%", 
        width: "100%", 
        justifyContent: "center", 
        marginTop: Constants.statusBarHeight  }} >
            

            <Tab.Navigator>
                <Tab.Screen name="Materias" component={TelaMateria} />
                <Tab.Screen name="Dificuldade" component={TelaDificuldade} />
            </Tab.Navigator>
          
          </View>
    );
}


export default TelaDificuldade;