import { View, FlatList, Pressable, Text, Image } from "react-native"

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
                            <Pressable onPress={() => navigation.navigate("Game", { id: item.id })}>
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

