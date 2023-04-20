import { Button, View } from 'react-native';

const Buttoncomponent =({fpress, stylebutton}) => {
    return(
        <View style={stylebutton}>
        <Button title='Registro' color='none'  onPress={ fpress} />
        </View>
    )
}

export default Buttoncomponent;