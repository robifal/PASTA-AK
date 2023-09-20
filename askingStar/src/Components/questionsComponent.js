// QuestionScreen.js - Componente de Tela de Pergunta

import React from 'react';
import { View, Text, Button } from 'react-native';
import AlternativasComponent from './alternativaComponent';
const QuestionScreen = ({ pergunta, alternativas, respostaCorreta, onNext }) => {
    const [resposta, setResposta] = React.useState(null);
    console.log("resposta", resposta);

    const handleResponder = () => {
        if (resposta === respostaCorreta) {
            // Lógica para resposta correta
        } else {
            // Lógica para resposta incorreta
        }
        onNext(); // Avança para a próxima pergunta
    };

    return (
        <View>
            <Text>{pergunta}</Text>

            <View style={{ width: 200, height: 400 }}>
                <AlternativasComponent
                    question={resposta}
                    setQuestion={setResposta}
                    Array={alternativas}
                    handleResponder={handleResponder}
                />
                {/* <Button title="Responder" onPress={handleResponder} /> */}
            </View>
        </View>
    );
};

export default QuestionScreen;
