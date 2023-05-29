const { model } = require('mongoose');
const {Perguntas : Perguntas} = require('../models/Pergunta');

const portuguesController = {
    

    perguntas: async(req, res) => {
        try{

            const perguntasPortugues = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }


            const reponse = await Perguntas.create(perguntasPortugues);
            res.json({msg: "Pergunta De Portugues Cadastrada!"});




        }catch(error){
            console.log(error);
        }
    }
};

module.exports = portuguesController;