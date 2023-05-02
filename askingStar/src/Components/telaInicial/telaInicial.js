import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const TelaInicial =({navigation}) => {

    const styles = StyleSheet.create({
        stylebutton:{
            backgroundColor: 'white',
            borderRadius: 5
    }}
    )

    return (

        <View style={{flex: 1}}>
            <ImageBackground style= {{flex: 1}} source={require('../../../img/background-ask.png')} resizeMode='cover' ></ImageBackground>
            <View style= {{ gap: 10, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
   <View>
    <Button style={{color: "white"}}>Jogar</Button> 
    </View> 


</View>
 </View>
}