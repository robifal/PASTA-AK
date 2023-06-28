import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { Button } from "react-native-paper";
import Inputcomponent from "../../Components/inputComponent";
import Buttoncomponent from "../../Components/buttonComponent";

const image = {};

const TelaInicial = ({ navigation }) => {
  const styles = StyleSheet.create({
    stylebutton: {
      backgroundColor: "#E6E6E6",
      textColor: "#0D0C67",
      borderRadius: 5,
    },
  });

  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1 }}
      source={require("../../../img/background.png")}
    >

     
      {/* Botão Conectar */}
      <View
        style={{
          flex: 1,
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%"
        }}
      >
        <View style={{ width: "60%" }}>
          <Buttoncomponent
            color="#0D0C67"
            stylebutton={styles.stylebutton}
            fpress={() => navigation.navigate("Entrar")}
            title="CONECTAR"
          />
        </View>

        {/* Botão Cadastrar */}
        <View style={{ width: "60%" }}>
          <Buttoncomponent
            color="#0D0C67"
            stylebutton={styles.stylebutton}
            fpress={() => navigation.navigate("Cadastro")}
            title="CADASTRE-SE"
          />
        </View>
      </View>
     
    </ImageBackground>
  );
};

export default TelaInicial;
