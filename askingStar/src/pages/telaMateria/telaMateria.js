import { View, Text, FlatList, Image, Pressable } from "react-native"



const TelaMateria = ({navigation}) =>{

    const Card = [
        {
            id: 'portugues',
            source:require('../../../img/imgs/materias/portugues.png')
        },
        {
            id: 'matematica',
            source:require('../../../img/imgs/materias/matematica.png')
        },
        {
            id: 'historia',
            source:require('../../../img/imgs/materias/historia.png')
        },
        {
            id: 'artes',
            source:require('../../../img/imgs/materias/artes.png')
        },


        
    ];

    return(

    <View style={{
        flex: 1,
        backgroundColor: "#04154F",
        marginTop: 50
    }}>
        
        
        
        
      

        <View style={{
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center',
            gap: 10,
            // marginVertical: "45%",
            // height: 600
            
            
        }}>
            <FlatList style={{
            
            backgroundColor: "red",
            }}
            data={Card}
            renderItem={({item}) =>(
           <View style={{
            
           }}>
            <Pressable onPress={() => navigation.navigate("Game",{id:item.id}) }> 
                
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