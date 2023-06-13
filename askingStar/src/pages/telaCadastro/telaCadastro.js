import Inputcomponent from "../../Components/inputComponent";
import Buttoncomponent from "../../Components/buttonComponent";
import AlternativasComponent from "../../Components/alternativaComponent";
import { StyleSheet, View, ImageBackground, Text, FlatList } from "react-native";
import Constants from "expo-constants";
import { useEffect, useState } from 'react'
import { Requisicoes } from "../../services/requisicoes";
import { TEMA_CORES } from "../../styles/color";
import SimpleSelectButton from "react-native-simple-select-button";


const TelaCadastro = ({ navigation }) => {

  const button_list = [
    { label: "Aluno", value: "aluno" },
    { label: "Professor", value: "professor" },
  ];


  const styles = StyleSheet.create({
    stylebutton: {
      //backgroundColor: '#000000',
      // borderRadius: 5
    }
  }
  )
  const [value, setValue] = useState('first');
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  console.log(nome)
  console.log(email);
  console.log(telefone);
  console.log(senha);

  const [visibilitycurriculo, setvisibilitycurriculo] = useState(true)

  const dadosUser = { 
    nome: nome,
    email: email,
    telefone: telefone, 
    senha: senha }

    console.log(dadosUser);

  useEffect(() => {


  }, [])


  const loading = async () => {
    // const requisicoes = new Requisicoes();
    // const response = await requisicoes.registerUsers(dadosUser);

    console.log("aaaaaaaaaaaa");
    navigation.navigate("Entrar")


    // console.log(response);
  }

  function exibirButton(value){


    

    if(value == "aluno"){
      setvisibilitycurriculo(false)
    }
    if(value == "professor"){
      setvisibilitycurriculo(true)
    }
  }


  const ComponentCurrirulo = () =>{

    if(visibilitycurriculo){
  return(
    <View
      style={{ width: "50%",backfaceVisibility:"hidden"  }}
      >
        
      <Text style={{color: "white"}}>
      Curriculo

      </Text>

      <Inputcomponent 
        placeholder={"Link Curriculo"}
      />


  </View> )

    } else{
       return
    }

    
  }

  return (




    <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={require("../../../img/fundobsc.png")} >

      <View style={{
        alignItems: "center",
        textAlign: 'center',
        backgroundColor: "#E6E6E6",
        height: "3%",
        width: "100%",
        justifyContent: "center",
        marginTop: Constants.statusBarHeight
      }} >


        <Text style={{ fontSize: 25, fontWeight: "bold", color: '#0D0C67' }}>CADASTRO</Text>

      </View>
      <View style={{ flex: 1, gap: 10, justifyContent: 'center', alignItems: 'center' }}>



        <View style={{ width: "50%" }}>

          <Text style={{ color: 'white' }}>Nome</Text>

          <Inputcomponent
            func={(text) => {
              setNome(text.target.value)
            }}
            placeholder="Nome" />

        </View>


        <View style={{ width: "50%" }}>

          <Text style={{ color: 'white' }}>Número De Telefone</Text>

          <Inputcomponent
            func={(Number) => {
              setTelefone(Number.target.value)
            }}
            mode="tel"
            placeholder="Numero Telefone" />

        </View>

        <View style={{ width: "50%" }}>

          <Text style={{ justifyContent: "center", color: 'white' }}>Email</Text>
          <Inputcomponent
            func={(text) => {
              setEmail(text.target.value)
            }}
            placeholder="Email" color="white" />

        </View>

        <View style={{ width: "50%" }}>

          <Text style={{ color: 'white' }}>Coloque Sua Senha</Text>

          <Inputcomponent
            func={(text) => {
              setSenha(text.target.value)
            }}
            placeholder="Senha" />

        </View>

            <ComponentCurrirulo
            
            />

        <View style={{
          flexDirection: 'row',
          gap: 20,
          padding: 10
        }}>

          <View>

             <FlatList 
             data={button_list}
             renderItem={({item}) => <SimpleSelectButton 
             text= {item.label}
             onPress={() => {
                exibirButton(item.value)
            
             }}/>}
             />

          </View>

        </View>
        <View style={{ width: "50%" }}>
          <Buttoncomponent  fpress={() => loading()}
            title="CADASTRAR"
          />
        </View>
      </View>
    </ImageBackground>


  );
};

export default TelaCadastro;
