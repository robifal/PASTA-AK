import { Button, View } from 'react-native';

const ButtonIcomponent = ({fpress, stylebutton}) => {
    return(
        <View style={stylebutton}>
        <Button title='Jogar' color='none' onPress={fpress}/> 
        </View>
    )
}

export default ButtonIcomponent;