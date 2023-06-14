import Inputcomponent from "../../Components/inputComponent";
import Buttoncomponent from "../../Components/buttonComponent";
import React, { useState, useEffect } from 'react';
import { Requisicoes} from "../../services/requisicoes";
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Constants from "expo-constants";

const Telalogin = ({ navigation }) => {
    
  const styles = StyleSheet.create({
    stylebutton: {
      backgroundColor: '#0D0C67',
      borderRadius: 5
    }
  }
  )

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  console.log(email);
  console.log(senha);

  useEffect (() => {
         

  }, []) 

  const loading = async () => {
    const requisicoes = new Requisicoes();
    const responseLogin = await requisicoes.loginUser({data: {email: email, senha: senha}});


      console.log(responseLogin);

  }

  return (
 <ImageBackground resizeMode="cover" style={{flex: 1}} source={require("../../../img/fundobsc.png")} >
      
      <View  style={{ 
       alignItems: "center",
       textAlign: 'center',
       backgroundColor:"#E6E6E6", 
       height: "3%", 
       width: "100%", 
       justifyContent: "center", 
       marginTop: Constants.statusBarHeight  }} >

<Text style={{fontSize:25,fontWeight:"bold" ,color: '#0D0C67' }}>LOGIN</Text>

      </View>
      <View style={{flex: 1,gap: 10, justifyContent: 'center',  alignItems: 'center' }}>
      <View style={{width: "50%"}}>
            <Text style={{ justifyContent:"center" ,color: 'white'}}>Email</Text>
            <Inputcomponent 
           func = {(text) => {
            setEmail(text.target.value) 
           } }           
           placeholder="Email" />
          </View>
          <View style={{width: "50%"}}>
            <Text style={{ color: 'white'}}>Senha:</Text>
            <Inputcomponent 
            func= {(text) => {
              setSenha(text.target.value)
            } }
            placeholder="Senha" />
          </View>
            

            <View style={{width: "50%"}}>
          <Buttoncomponent stylebutton={styles.stylebutton} fpress={() => loading()} title= "Logar"/>
          </View>
      </View>
  </ImageBackground>
  );

};
 export default Telalogin;