import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Constants from "expo-constants";
import Buttoncomponent from "../../Components/buttonComponent";
import { TEMA_CORES } from "../../styles/color";
import { useState } from "react";
import requestsQuestions from "../../services/questions";
import axios from "axios";
import QuestionScreen from "../../Components/questionsComponent";
import data from "../../perguntas.json";

const Quiz = ({ navigation, route }) => {
  //   React.useEffect(() => {
  //     (async () => {
  //       const response = requestsQuestions.portuguesList();
  //
  //console.log(response);
  //     })();
  //   }, []);

  //   const [question, setQuestion] = useState()

  //  async function handleQuestion({question}) {

  //   await axios.post("url", {
  //     questionSelect: question
  //   })

  //   }

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [finishGame, setFinishGame] = useState(false)
  const [pontos, setPontos] = React.useState(0);

  function handleFinishGame() {
    navigation.navigate("QuizConcluido", {
      pontos: pontos,
      numQuestions: data.length
    });

  }

  const handleNextQuestion = () => {
    if (perguntaAtual < data.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      // Você chegou ao final das perguntas, pode mostrar uma mensagem ou fazer algo aqui.
      setFinishGame(true)
      return;
    }
  };


  useEffect(() => {
    if (finishGame)
      handleFinishGame()
  }, [finishGame])

  return (

    <View style={{
      backgroundColor: '#04154F',
      flex: 1,
    }}>




      <View style={{
        alignItems: 'stretch',
        textAling: "center",
        backgroundColor: "#102261",
        height: "8%",
        justifyContent: "center",
        //marginTop: Constants.statusBarHeight,
        padding: 20,
        width: "100%"
      }}>

        <Text style={{
          fontSize: 25,
          color: "white",
        }}>Matématica </Text>

      </View>

      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
      }}>
        {perguntaAtual < data.length ? (
          <QuestionScreen
            pergunta={data[perguntaAtual].pergunta}
            alternativas={data[perguntaAtual].alternativas}
            respostaCorreta={data[perguntaAtual].resposta}
            onNext={handleNextQuestion}
            setPontos={setPontos}
            pontos={pontos} />
        ) : (
          <Text>Você concluiu todas as perguntas!</Text>
        )}
      </View>



    </View>

  );


};

export default Quiz;
