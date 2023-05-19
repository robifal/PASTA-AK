import Inputcomponent from "../../Components/inputComponent";
import Buttoncomponent from "../../Components/buttonComponent";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import Constants from "expo-constants";
import { useEffect, useState } from 'react'
import { Requisicoes } from "../../services/requisicoes";


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
 
  console.log(nome)
  console.log(email);
  console.log(telefone);
  console.log(senha);


    useEffect (() => {
         

    }, [])   


    const loading = async () => {
    const requisicoes = new Requisicoes();
    const response = await requisicoes.registerUsers({data: {nome: nome, email: email, telefone: telefone, senha: senha}});
    
        console.log(response);
  }

  return (


    

    <ImageBackground resizeMode="cover" style={{flex: 1}} source={require("../../../img/background-ask.png")} >
      
       <View  style={{ 
        alignItems: "center",
        textAlign: 'center',
        backgroundColor:"#E6E6E6", 
        height: "3%", 
        width: "100%", 
        justifyContent: "center", 
        marginTop: Constants.statusBarHeight  }} >
            

            <Text style={{fontSize:25,fontWeight:"bold" ,color: '#0D0C67' }}>CADASTRO</Text>
          
          </View>
        <View style={{flex: 1,gap: 10, justifyContent: 'center',  alignItems: 'center' }}>
         
          <View style={{width: "50%"}}>
            <Text style={{ justifyContent:"center" ,color: 'white'}}>Seu Email</Text>
            <Inputcomponent 
           func = {(text) => {
            setEmail(text.target.value) 
           } }           
           placeholder="Email" />
          </View>
          <View style={{width: "50%"}}>
            <Text style={{ color: 'white'}}>Seu Nome</Text>
            <Inputcomponent 
            func= {(text) => {
              setNome(text.target.value)
            } }
            placeholder="Nome" />
          </View>
          <View style={{width: "50%"}}>
            <Text style={{ color: 'white' }}>Seu Numero De Telefone</Text>
            <Inputcomponent
            func={(Number) => {
              setTelefone(Number.target.value)
            } }
            mode = "tel"
            placeholder="Numero Telefone" />
          </View>
          <View style={{width: "50%"}}>
            <Text style={{ color: 'white' }}>Coloque Sua Senha</Text>
            <Inputcomponent 
            func={(text) => {
              setSenha(text.target.value)
            } }
            placeholder="Senha" />
          </View>
         


          <Buttoncomponent stylebutton={styles.stylebutton} fpress={() => loading()} />

        </View>
      </ImageBackground>
        

  );
};

export default TelaCadastro;
