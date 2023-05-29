const {Perguntas : Perguntas }= require('../models/Pergunta');



const informaticaController = {

  

    perguntas: async(req, res) => {
        try{


            const perguntaInformatica = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

  

            const response = await Perguntas.create(perguntaInformatica);

            res.json({msg: "Perguntas de Informatica cadastrada!"});


        }catch(error){
            console.log(error);
        }

    }
};  


module.exports = informaticaController;