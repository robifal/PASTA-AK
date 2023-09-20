import SimpleSelectButton from 'react-native-simple-select-button';
import { FlatList, View } from 'react-native';
import { TEMA_CORES } from '../styles/color';
import { Button } from 'react-native-paper';

const AlternativasComponent = ({ Array, setQuestion, question, handleResponder,
    iconColor = TEMA_CORES.complement.quaternyazul,
    buttonSelectedColor = TEMA_CORES.complement.secundarylesc,
    buttonDefaultColor = TEMA_CORES.secundarypink,
    textDefaultColor = TEMA_CORES.complement.quaternyazul,
    textSelectedColor = TEMA_CORES.secundarypink,
    horizontal,

}) => {


    const Separator = () => {

        return (
            <View
                style={{ width: 10 }}>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                ItemSeparatorComponent={Separator}
                style={{ gap: 10 }}
                horizontal={horizontal}
                data={Array}
                renderItem={
                    ({ item }) => {
                        return <View style={{}}>
                            <SimpleSelectButton
                                onPress={() => setQuestion(item)}
                                isChecked={question === item}
                                text={item}
                                textSize={14}
                                buttonDefaultColor={buttonDefaultColor}
                                buttonSelectedColor={buttonSelectedColor}
                                textDefaultColor={textDefaultColor}
                                textSelectedColor={textSelectedColor}


                            />
                        </View>
                    }
                }
            />
            <Button onPress={ () => handleResponder()} style={{borderWidth: 1}}> text</Button>
        </View>
    )

}





export default AlternativasComponent;