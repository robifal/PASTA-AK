import React, { useState } from 'react';
import { ImageBackground, Button, Text, TextInput, StyleSheet, View , Image} from 'react-native';


const Telalogin = () => {
    
  const styles = StyleSheet.create({
    containerImg: {
      width: '100%',
      position: 'relative',
      top: '20%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    img: {
      width: 200,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
      },
  });


  

  return (
    <View style={{ color:'white', flex: 1, backgroundColor: '#070730' , padding: ''}}>
    
    <View style={styles.containerImg}> 
       <Image source={require('../../../img/branca.svg')}
           style={
             styles.img
           }/>
    </View>

   
    <View style={{ 
          display:  'flex',
          justifyContent: 'center',
          alignitems: 'center',
          flex: 1
          }}> 
    
       <TextInput
        style={{
          borderWidth: 0.5,
          backgroundColor: 'none',
          borderColor: 'white',
          borderRadius: 5,
          color: 'white',
          padding: 10,
          flexDirection: 'column',
          alignitems: 'stretch' ,
          marginHorizontal: 10,
          
        }}
        placeholder=" Coloque seu Email"
      />
      <TextInput
    
        style={{ borderWidth: 1.2,
        backgroundColor: 'none',
        borderColor: 'white',
        borderRadius: 5,
        color: 'white',
        padding: 10,
        flexDirection: 'column',
        alignitems: 'stretch', 
        marginHorizontal: 10,
          }}
        placeholder=" Coloque sua senha"
      />
      <View style={{backgroundColor: '#0B0B5B', marginHorizontal: 10, marginVertical: 5, borderRadius: 5}}>
      <Button color='none' title="Sing in" />
       </View>
      <Text style={{ color: 'skyblue', marginHorizontal: 10 }}>Esqueceu a senha?</Text>
      <Text style={{color: 'skyblue', marginHorizontal: 10}}>Cadastre-se </Text>
      </View>
      <View>
      
      </View>
    </View>    

  );    


};
 export default Telalogin;