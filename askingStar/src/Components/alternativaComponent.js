import SimpleSelectButton from 'react-native-simple-select-button';
import { FlatList, View } from 'react-native';
import { useState } from 'react';
import { TEMA_CORES } from '../styles/color';


const AlternativasComponent = ({ Array, 
    iconColor = TEMA_CORES.complement.quaternyazul, 
    buttonSelectedColor = TEMA_CORES.complement.secundarylesc,
    buttonDefaultColor = TEMA_CORES.secundarypink,
    textDefaultColor = TEMA_CORES.complement.quaternyazul,
    textSelectedColor = TEMA_CORES.secundarypink,
    horizontal, styleAlt

}) => {

    const [choice, setChoice] = useState('');

    

    const Separator = () => {

        return (
            <View
                style={{width: 50}}>
            </View>
        )
    }

    return(
        <FlatList 
        ItemSeparatorComponent={Separator}
        style={{ gap: 10}}
        horizontal={horizontal}
        data={Array}
        renderItem={
            ({ item }) =>
            <SimpleSelectButton
            onPress={() => setChoice(item.value)}
            isChecked={choice === item.value}
            text={item.label}
            textSize={14}
            // iconName="checkcircleo"
            iconColor={iconColor}
            iconSize={14}
            buttonDefaultColor={buttonDefaultColor}
            buttonSelectedColor={buttonSelectedColor}
            textDefaultColor={textDefaultColor}
            textSelectedColor={textSelectedColor}
            
            
          />
        }
        />
    )

}





export default AlternativasComponent;