import { View, Text } from "react-native"
import Constants from "expo-constants";
import AlternativasComponent from "../../Components/alternativaComponent";



const Quiz = ({ navigation }) => {


    const button_list = [
        { label: "Button 1", value: "1" },
        { label: "Button 2", value: "2" },
        { label: "Button 3", value: "3" },
        { label: "Custom Button", value: "4" },
      ];

    return(
        <View style={{
            alignItems: "center",
            textAling: "center",
            backgroundColor: "#102261",
            height: "3%",
            justifyContent: "center",
            marginTop: Constants.statusBarHeight
        }}>
    



    <View>

        <Text>
        1.Ana tem 3000 empadas para entregar. Ela tem que armazena-las em caixas que comportam apenas. Quantas caixas ela precisará para entregar as empadas?
        </Text>

        <View>

        <AlternativasComponent 
        Array={button_list}
        />

        </View>
    </View>
    </View>
    
    )

}


export default Quiz;