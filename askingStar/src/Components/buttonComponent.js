import { Button, View } from 'react-native';

const Buttoncomponent =({fpress, stylebutton, title}) => {
    return(
        <View style={stylebutton}>
        <Button title={title} color='none'  onPress={ fpress} />
        </View>
    )
}

export default Buttoncomponent;