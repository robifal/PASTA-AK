import Inputcomponent from "../../Components/inputComponent";
import Buttoncomponent from "../../Components/buttonComponent";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import Constants from "expo-constants";
import { useState } from 'react'



const TelaCadastro = ({ navigation }) => {

  const styles = StyleSheet.create({
    stylebutton: {
      backgroundColor: '#0D0C67',
      borderRadius: 5
    }
  }
  )

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')
  console.log(nome)
  console.log(email);
  console.log(telefone);
  console.log(senha);
  console.log(confirmar);



  return (


    

    <ImageBackground resizeMode="cover" style={{flex: 1}} source={require("../../../img/background-ask.png")} >
      
       <View  style={{ alignItems: "center",textAlign: 'center',color: '#0D0C67', backgroundColor:"#E6E6E6", height: "3%", width: "100%", justifyContent: "center", fontSize:"00%", marginTop: Constants.statusBarHeight  }} >
            

            <Text>CADASTRO</Text>
          
          </View>
        <View style={{flex: 1,gap: 10, justifyContent: 'center',  alignItems: 'center' }}>
         
          <View>
            <Text style={{ justifyContent:"center" ,color: 'white'}}>Seu Email</Text>
            <Inputcomponent 
           func = {(text) => {
            setEmail(text.target.value) 
           } }           
           placeholder="Email" />
          </View>
          <View>
            <Text style={{ color: 'white'}}>Seu Nome</Text>
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
            mode = "tel"
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
         


          <Buttoncomponent stylebutton={styles.stylebutton} fpress={() => navigation.navigate('ENTRAR')} />

        </View>
      </ImageBackground>
        

  );
};

export default TelaCadastro;
