import React, { useState } from 'react';
import { Text,  View , StyleSheet, ImageBackground} from 'react-native';
import { Button } from 'react-native-paper';
import Inputcomponent from '../../Components/inputComponent';
import Buttoncomponent from '../../Components/buttonComponent';


const image = {}

const TelaInicial = ({navigation}) => {

  const styles = StyleSheet.create({
    stylebutton: {
      backgroundColor: '#E6E6E6',
      textColor: '#0D0C67',
      borderRadius: 5
    }
  }
  )

  return (

    <ImageBackground resizeMode="cover" style={{flex: 1}} source={require("../../../img/background-ask.png")} >


        <View style={{flex: 1,gap: 10, justifyContent: 'center' , alignItems: 'center' }}>
         
          <View style={{width:"50%"}}>
          <Buttoncomponent 
          color="#0D0C67"
          stylebutton={styles.stylebutton} fpress={() => loading()} title="CONECTAR"/>

          </View>

            <View style={{width:"50%"}}>
          <Buttoncomponent 
          color="#0D0C67"
          stylebutton={styles.stylebutton} fpress={() => loading()} title="CADASTRE-SE" />
          </View>

        </View>
      </ImageBackground>
        

  );
};

export default TelaInicial;
