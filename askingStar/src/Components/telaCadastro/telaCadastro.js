import { View, Text, ImageBackground, StyleSheet} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Inputcomponent from "../inpurtCompenent";
import Buttoncomponent from "../buttonComponent";

const TelaCadastro = ({navigation}) => {

    const styles = StyleSheet.create({
        stylebutton:{
            backgroundColor: 'white',
            borderRadius: 5
    }}
    )

  return (
 
    <View style={{flex: 1}}>
        
           <ImageBackground style= {{flex: 1}} source={require('../../../img/ASKING.svg')} resizeMode='cover' > 
      <View style= {{ gap: 10, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <View ><Text style={{textAlign: 'center', color: 'white'}}>CADASTRO</Text></View>
        <View>
            <Text style={{color: 'white'}}>Seu Email</Text>
        <Inputcomponent placeholder="Email" />
        </View>
        <View>
        <Text style={{color: 'white'}}>Seu Nome</Text>
        <Inputcomponent placeholder="Nome" />
        </View>
        <View>
        <Text style={{color: 'white'}}>Seu Numero De Telefone</Text>
        <Inputcomponent placeholder="Numero Telefone" />
        </View> 
        <View>
        <Text style={{color: 'white'}}>Coloque Sua Snha</Text>
        <Inputcomponent placeholder="Senha" />
        </View>
        <View>
        <Text style={{color: 'white'}}>Confirmação De Senha</Text>
        <Inputcomponent placeholder="Confirmar Senha" />
        </View>
        <View>
        <Picker >
          <Picker.Item label="IFAL-AIRPORT" value="AEROPORT" />
          <Picker.Item label="IFAL-MCZ" value="MCZ" />
        </Picker>
        </View>

       <Buttoncomponent stylebutton={styles.stylebutton} fpress={() => navigation.navigate('ENTRAR')} /> 

      </View>
       </ImageBackground>
    </View>
   
  );
};

export default TelaCadastro;
