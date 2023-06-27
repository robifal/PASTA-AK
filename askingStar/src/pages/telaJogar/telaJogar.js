import { View, Text, ImageBackground } from "react-native";
import Buttoncomponent from "../../Components/buttonComponent";

const TelaJogar = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1 }}
      source={require("../../../img/bg-telajogar.png")}
    >
      <View
        style={{
          flex: 1,
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "30%"
        }}
      >
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
            Explore
          </Text>
          <Text style={{ color: "gray", fontSize: 25 }}>
            Seus conhecimentos
          </Text>
        </View>

        <View style={{ width: "60%", marginTop: "5%" }}>
          <Buttoncomponent
            fpress={() => navigation.navigate("Materia")}
            buttonColor="white"
            title="JOGAR"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default TelaJogar;
