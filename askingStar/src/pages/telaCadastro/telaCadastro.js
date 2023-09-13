import Inputcomponent from "../../Components/inputComponent";
import Buttoncomponent from "../../Components/buttonComponent";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../services/requisicoes";
import { TEMA_CORES } from "../../styles/color";
import SimpleSelectButton from "react-native-simple-select-button";
import ComponentCurrirulo from "../../Components/curriculoComponent";

const TelaCadastro = ({ navigation }) => {
  const button_list = [
    { label: "Aluno", value: "aluno" },
    { label: "Professor", value: "professor" },
  ];

  const [value, setValue] = useState("first");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [professor, setProfessor] = useState("aluno");
  const [visibilitycurriculo, setvisibilitycurriculo] = useState(false);
  const [curriculo, setCurriculo] = useState("curriculo");

  const dadosUser = {
    name: nome,
    email: email,
    telephone: telefone,
    password: senha,
    curriculo: curriculo,
    professor: professor === "professor" ? true : false,
  };

  useEffect(() => {}, []);

  const registrarUsers = async () => {
    const requisicoes = new Requisicoes();
    const response = await requisicoes.registerUsers(dadosUser);

    navigation.navigate("Entrar");
  };

  function exibirButton(value) {
    if (value == "aluno") {
      setvisibilitycurriculo(false);
    }
    if (value == "professor") {
      setvisibilitycurriculo(true);
    }
  }

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
          marginTop: Constants.statusBarHeight,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#0D0C67" }}>
          CADASTRO
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
        <View style={{ width: "60%" }}>
          <Text style={{ color: "white" }}>Nome</Text>

          <Inputcomponent
            func={(text) => {
              setNome(text);
            }}
            placeholder="Nome"
          />
        </View>

        <View style={{ width: "60%" }}>
          <Text style={{ color: "white" }}>Número De Telefone</Text>

          <Inputcomponent
            func={(Number) => {
              setTelefone(Number);
            }}
            mode="tel"
            placeholder="Numero Telefone"
          />
        </View>

        <View style={{ width: "60%" }}>
          <Text style={{ justifyContent: "center", color: "white" }}>
            Email
          </Text>
          <Inputcomponent
            mode="email"
            func={(text) => {
              setEmail(text);
            }}
            placeholder="Email"
            color="white"
          />
        </View>

        <View style={{ width: "60%" }}>
          <Text style={{ color: "white" }}>Coloque Sua Senha</Text>

          <Inputcomponent
            secureTextEntry={true}
            func={(text) => {
              setSenha(text);
            }}
            placeholder="Senha"
          />
        </View>

        <ComponentCurrirulo
          setCurriculo={setCurriculo}
          visibilitycurriculo={visibilitycurriculo}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 20,
            padding: 10,
          }}
        >
          <View>
            <FlatList
              data={button_list}
              renderItem={({ item }) => (
                <SimpleSelectButton
                  text={item.label}
                  buttonSelectedColor={TEMA_CORES.complement.primarylilas}
                  buttonDefaultColor={TEMA_CORES.secundarypink}
                  textDefaultColor={TEMA_CORES.primaryblue}
                  textSelectedColor={TEMA_CORES.secundarypink}
                  isChecked={professor === item.value}
                  onPress={() => {
                    setProfessor(item.value);
                    exibirButton(item.value);
                  }}
                />
              )}
            />
          </View>
        </View>
        <View style={{ width: "60%" }}>
          <Buttoncomponent fpress={() => registrarUsers()} title="CADASTRAR" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default TelaCadastro;
