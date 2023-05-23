import { Button, View, StyleSheet } from 'react-native';

const Buttoncomponent =({fpress, stylebutton, title}) => {
    return(
        <View style={stylebutton}>
        <Button title={title} color='none'   onPress={ fpress} />
        </View>
    

    )}

    const styles = StyleSheet.create({
stylebutton:{
    width: '100%',

}
    }
    )


export default Buttoncomponent;