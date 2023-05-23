import { View,Text, ImageBackground, StyleSheet } from "react-native";
import Buttoncomponent from "../../Components/buttonComponent";
import Inputcomponent from "../../Components/inputComponent";



const  Perguntas = ({ navigation}) => {


    const styles = StyleSheet.create({
        stylebutton: {
          backgroundColor: '#0D0C67',
          borderRadius: 5
        }
      }
      )
    
      const


    return(

        
        <ImageBackground resizeMode="cover" style={{flex: 1}} source={require("../../../img/fundobsc.png")} >
      
      <View  style={{ 
       alignItems: "center",
       textAlign: 'center',
       backgroundColor:"#E6E6E6", 
       height: "3%", 
       width: "100%", 
       justifyContent: "center", 
       }} >
           

           <Text style={{fontSize:25,fontWeight:"bold" ,color: '#0D0C67' }}>Cadastro Perguntas</Text>
         
         </View>
       <View style={{flex: 1,gap: 10, justifyContent: 'center',  alignItems: 'center' }}>
        
         <View style={{width: "50%"}}>
           <Text style={{ justifyContent:"center" ,color: 'white'}}>Pergunta</Text>
           <Inputcomponent 
          func = {(text) => {
          } }           
          placeholder="Email" />
         </View>
         <View style={{width: "50%"}}>
           <Text style={{ color: 'white'}}>alternativa 1</Text>
           <Inputcomponent 
           func= {(text) => {
           } }
           placeholder="Nome" />
         </View>
         <View style={{width: "50%"}}>
           <Text style={{ color: 'white' }}>alternativa 2</Text>
           <Inputcomponent
           func={(Number) => {
           } }
           mode = "tel"
           placeholder="Numero Telefone" />
         </View>
         <View style={{width: "50%"}}>
           <Text style={{ color: 'white' }}>Resposta</Text>
           <Inputcomponent 
           func={(text) => {
           } }
           placeholder="Senha" />
         </View>
        

           <View style={{width:"50%"}}>
         <Buttoncomponent stylebutton={styles.stylebutton} fpress={() => {}} title="Cadastrar"/>
         </View>
       </View>
     </ImageBackground>
       

       )
    }


export default Perguntas;