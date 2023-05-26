import SimpleSelectButton from 'react-native-simple-select-button';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { TEMA_CORES } from '../styles/color';


const AlternativasComponent = ({ Array }) => {

    const [choice, setChoice] = useState('');

    

    return(
        <FlatList 
        data={Array}
        renderItem={
            ({ item }) =>
            <SimpleSelectButton
            onPress={() => setChoice(item.value)}
            isChecked={choice === item.value}
            text={item.label}
            textSize={14}
            iconName="checkcircleo"
            iconColor={TEMA_CORES.complement.quaternyazul}
            iconSize={14}
            buttonDefaultColor="#e5e5e5"
            buttonSelectedColor={TEMA_CORES.complement.secundarylesc}
            textDefaultColor="#333"
            textSelectedColor="#fff"
            
            
          />
        }
        />
    )

}





export default AlternativasComponent;