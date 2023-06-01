const { model } = require('mongoose');
const {Portugues : Portugues} = require('../models/Portugues');

const portuguesController = {
    

    perguntas: async(req, res) => {
        try{

            const perguntasPortugues = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }


            const reponse = await Portugues.create(perguntasPortugues);
            res.json({msg: "Pergunta De Portugues Cadastrada!"});




        }catch(error){
            console.log(error);
        }
    }
};

module.exports = portuguesController;