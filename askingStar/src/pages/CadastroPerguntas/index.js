import { useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Requisicoes } from "../../services/requisicoes";
import Buttoncomponent from "../../Components/buttonComponent";
import Inputcomponent from "../../Components/inputComponent";

const Perguntas = ({ navigation }) => {
  const styles = StyleSheet.create({
    stylebutton: {
      // backgroundColor: '#0D0C67',
      // borderRadius: 5
    },
  });

  const [cadastroQuestions, setCadastro] = useState();
  const [question, setQuest] = useState();
  const [alternative, setAlter] = useState([]);
  const [response, setRespost] = useState();

  const setAlternativa = (alternativa) => {
    const teste = [{ alternativa }];
    setAlter([...alternative, alternativa]);

  };

  userEffect(() => {}, []);

  const registerQuestion = async () => {};
  const requisicoes = new Requisicoes();
  const responseQuestion = requisicoes.cadastroQuestion({});

  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1 }}
      source={require("../../../img/fundobsc.png")}
    >
      <View
        style={{
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#E6E6E6",
          height: "3%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#0D0C67" }}>
          Cadastro Perguntas
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ justifyContent: "center", color: "white" }}>
            Pergunta
          </Text>
          <Inputcomponent
            func={(text) => {
              setQuest(text);
            }}
            placeholder="Pergunta"
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ color: "white" }}>Alternativa 1</Text>
          <Inputcomponent
            func={(text) => {
              setAlternativa({ alter1: text.target.value });
            }}
            placeholder="Alternativa 1"
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ color: "white" }}>Alternativa 2</Text>
          <Inputcomponent
            func={(text) => {
              setAlternativa({ alter2: text.target.value });
            }}
            placeholder="Alternativa 2"
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ color: "white" }}>Alternativa 3</Text>
          <Inputcomponent
            func={(text) => {
              setAlternativa({ alter3: text.target.value });
            }}
            placeholder="Alternativa 3"
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ color: "white" }}>Alternativa 4</Text>
          <Inputcomponent
            func={(text) => {
              setAlternativa({ alter4: text.target.value });
            }}
            placeholder="Alternativa 4"
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ color: "white" }}>Resposta</Text>
          <Inputcomponent
            func={(text) => {
              setRespost(text);
            }}
            placeholder="Resposta"
          />
        </View>

        <View style={{ width: "50%" }}>
          <Buttoncomponent
            stylebutton={styles.stylebutton}
            fpress={() => {}}
            title="Cadastrar Pergunta"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Perguntas;
