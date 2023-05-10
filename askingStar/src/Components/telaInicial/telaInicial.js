import React, { useState } from 'react';
import { Button, Text,  View , StyleSheet} from 'react-native';
import ButtonIcomponent from '../buttonIComponent';

const TelaInicial = ({navigation}) => {

  const Separator = () => <View style={styles.separator} />


  
  const styles = StyleSheet.create({
    separator:{
      margin: 10,
    }
  })

  return (
    <View
      style={{
        color: 'white',
        flex: 1,
        backgroundColor: '#070719',
        padding: '',
      }}>
     
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignitems: 'center',
          flex: 1,
        }}>
       
        <View
          style={{
            backgroundColor: '#0B0B3B',
            marginHorizontal: 10,
            borderRadius: 5,
          }}>

          <ButtonIcomponent stylebutton={styles.stylebutton} fpress={() => navigation.navigate('Jogar')} />
    </View>   
    <Separator/>
    <View
          style={{
            backgroundColor: '#0B0B3B',
            marginHorizontal: 10,
            borderRadius: 5,
          }}>
          <Button color="none" title="Conectar"/>
        </View>
        <Text style={{ color: 'skyblue', marginHorizontal: 10 }}>
          Esqueceu a senha?
        </Text>
        <Text style={{ color: 'skyblue', marginHorizontal: 10 }}>
          Cadastre-se{' '}
        </Text>
      </View>
    
    </View>

  );
};

export default TelaInicial;
