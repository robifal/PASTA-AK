import { View, FlatList, Pressable, Text, Image } from "react-native"
import data from "../../perguntas.json"

const TelaMateria = ({ navigation }) => {

    const Card = [
        {
            id: 'portugues',
            idMateria: "1",
            source: require('../../../img/imgs/materias/portugues.png')
        },
        {
            id: 'matematica',
            idMateria: "2",

            source: require('../../../img/imgs/materias/matematica.png')
        },
        {
            id: 'historia',
            idMateria: "3",

            source: require('../../../img/imgs/materias/historia.png')
        },
        {
            id: 'artes',
            idMateria: "4",

            source: require('../../../img/imgs/materias/artes.png')
        },
        {
            id: "informatica",
            idMateria: "5",

            source: require('../../../img/imgs/materias/informatica.png')
        },
        {
            id: 'educacao-fisica',
            idMateria: "6",

            source: require('../../../img/imgs/materias/educacaofisica.png')
        }

    ];



    return (

        <View style={{
            flex: 1,
            backgroundColor: "#04154F"
        }}>
            <View style={{
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#102261",
                height: "7%",
                width: "100%",
                gap: 10,
                flexDirection: "row"


            }}>
                <Image source={require('../../../img/icons/icon-menu-materia.png')} />
                <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
                    MATERIA  </Text>
            </View>


            <View style={{
                flex: 1,
                alignItems: 'center',
                gap: 10,
            }}>
                <FlatList
                    data={Card}
                    renderItem={({ item }) => (
                        <View style={{

                        }}>
                            <Pressable onPress={() => navigation.navigate("Game", { idMateria: item.idMateria })}>
                                <Image source={item.source} />
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
};


export default TelaMateria;

