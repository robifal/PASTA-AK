const {Perguntas : Perguntas} = require('../models/Pergunta');

const matematicaController = {

    perguntas: async(req, res) => {
        try{

                console.log("Entro aqui");

            const perguntasMatematica = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

                const response = await Perguntas.create(perguntasMatematica);

                res.json({msg: "Pergunta De Matematica Cadastrada"});

        }catch(error){
            console.log(error);
        }
    }

};

module.exports = matematicaController;