import { Picker } from "@react-native-picker/picker";
import Inputcomponent from "../../Components/inputComponent";
import Buttoncomponent from "../../Components/buttonComponent";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { useState } from 'react'


const TelaCadastro = ({ navigation }) => {

  const styles = StyleSheet.create({
    stylebutton: {
      backgroundColor: 'black',
      borderRadius: 5
    }
  }
  )

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')
  console.log(email);



  return (

    <View style={{ flex: 1, backgroundColor: 'gray' }}>

      <ImageBackground source={"../img/background-ask.png"} />
        <View style={{ gap: 10, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <View ><Text style={{ textAlign: 'center', color: 'white' }}>CADASTRO</Text></View>
          <View>
            <Text style={{ color: 'white' }}>Seu Email</Text>
            <Inputcomponent 
           func = {(text) => {
            setEmail(text.target.value) 
           } }           
           placeholder="Email" />
          </View>
          <View>
            <Text style={{ color: 'white' }}>Seu Nome</Text>
            <Inputcomponent 
            func= {(text) => {
              setNome(text.target.value)
            } }
            placeholder="Nome" />
          </View>
          <View>
            <Text style={{ color: 'white' }}>Seu Numero De Telefone</Text>
            <Inputcomponent
            func={(Number) => {
              setTelefone(Number.target.value)
            } }
            placeholder="Numero Telefone" />
          </View>
          <View>
            <Text style={{ color: 'white' }}>Coloque Sua Senha</Text>
            <Inputcomponent 
            func={(text) => {
              setSenha(text.target.value)
            } }
            placeholder="Senha" />
          </View>
          <View>
            <Text style={{ color: 'white' }}>Confirmação De Senha</Text>
            <Inputcomponent
            func={(text) => {
              setConfirmar(text.target.value)
            } }
            placeholder="Confirmar Senha" />
          </View>
          <View>
            <Picker >
              <Picker.Item label="IFAL-AIRPORT" value="AEROPORT" />
              <Picker.Item label="IFAL-MCZ" value="MCZ" />
            </Picker>
          </View>

          <Buttoncomponent stylebutton={styles.stylebutton} fpress={() => navigation.navigate('ENTRAR')} />

        </View>
      
    </View>

  );
};

export default TelaCadastro;
