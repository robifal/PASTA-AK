import SimpleSelectButton from 'react-native-simple-select-button';
import { FlatList } from 'react-native';
import { useState } from 'react';


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
            iconColor="#fff"
            iconSize={14}
            buttonDefaultColor="#e5e5e5"
            buttonSelectedColor="#ff9c5b"
            textDefaultColor="#333"
            textSelectedColor="#fff"
          />
        }
        />
    )

}





export default AlternativasComponent;