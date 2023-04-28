import { TextInput } from "react-native-paper"
import { StyleSheet } from "react-native"


const Inputcomponent = ({placeholder}) => {

    const styles = StyleSheet.create({
        stylebutton:{
            backgroundColor: 'none',
            borderColor: 'white',
            borderRadius: 5,
            color: 'white',
            padding: 2,
            alignitems: 'stretch' ,
            marginHorizontal:0.5
    }}
     
    )

    return(
        <TextInput

            style={styles.stylebutton}
            placeholder={placeholder}
            mode='outlined'
            
        />
    )
}


export default Inputcomponent