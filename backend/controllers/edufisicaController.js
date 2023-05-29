const {Perguntas : Perguntas }= require('../models/Pergunta');



const edufisicaController = {

  

    perguntas: async(req, res) => {
        try{


            const perguntaEdufisica = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

  

            const response = await Perguntas.create(perguntaEdufisica);

            res.json({msg: "Perguntas de Educação Fisica cadastrada!"});


        }catch(error){
            console.log(error);
        }

    }
};  


module.exports = edufisicaController;