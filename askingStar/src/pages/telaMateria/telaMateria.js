import { View, FlatList, Image, Pressable } from "react-native"
import Constants from "expo-constants";



const TelaMateria = ({ navigation }) => {

    const Card = [
        {
            id: 'portugues',
            source: require('../../../img/imgs/materias/portugues.png')
        },
        {
            id: 'matematica',
            source: require('../../../img/imgs/materias/matematica.png')
        },
        {
            id: 'historia',
            source: require('../../../img/imgs/materias/historia.png')
        },
        {
            id: 'artes',
            source: require('../../../img/imgs/materias/artes.png')
        },
        {
            id: "informatica",
            source: require('../../../img/imgs/materias/informatica.png')
        },
        {
            id: 'educacao-fisica',
            source: require('../../../img/imgs/materias/educacaofisica.png')
        }

    ];

    

    return (

        <View style={{
            flex: 1,
            backgroundColor: "#04154F",
            marginTop: Constants.statusBarHeight
        }}>


            <View style={{
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                gap: 10,
                // marginVertical: "45%",
                // height: 600


            }}>
                <FlatList 
                    data={Card}
                    renderItem={({ item }) => (
                        <View style={{

                        }}>
                            <Pressable onPress={() => navigation.navigate("Game", { id: item.id })}>
                                <Image source={item.source}/>
                            </Pressable>
                            <View style={{
                                marginVertical: 5,
                            }}>


                            </View>

                        </View>

                    )
                    }

                />
            </View>

        </View>

    );
}


export default TelaMateria;

  