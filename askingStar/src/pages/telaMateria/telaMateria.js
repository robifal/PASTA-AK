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
        }
        
    ];

    return(

    <View style={{
        flex: 1,
        backgroundColor: "#04154F"
    }}>
        
        
        
        
      

        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            
        }}>
            <FlatList style={{
                
            }}
            data={Card}
            renderItem={({item}) =>
            <Pressable onPress={() => navigation.navigate("Game",{id:item.id}) }> 
            <Image source={item.source}/>
            </Pressable>}
            
            />
        </View>

    </View>

    );
}


export default TelaMateria;