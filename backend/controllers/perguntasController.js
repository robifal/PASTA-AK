const perguntaModel = require('../models/Pergunta');


const perguntaController = {
    perguntas: async(req, res) => {
        try{
            const pergunta = {
                question: req.body.question,
                response: req.body.response
            }
        }catch(error){
            console.log(error);
        }

    }
};  