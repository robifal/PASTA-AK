const { Perguntas : Perguntas} = require('../models/Pergunta');


const historiaController = {

    perguntas: async(req, res) => {
        try{
            
            const perguntaHistoria = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

            const response = await Perguntas.create(perguntaHistoria)/

            res.json({msg: "Pergunta De Historia Cadastrada!"});

        }catch(error){
            console.log(error);
        }



    }

};

module.exports = historiaController