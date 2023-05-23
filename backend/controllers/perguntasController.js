const {Perguntas : Perguntas }= require('../models/Pergunta');



const PerguntaController = {

  

    perguntas: async(req, res) => {
        try{


            const pergunta = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

  

            const response = await Perguntas.create(pergunta);

            res.json({msg: "Perguntas cadastrada!"});


        }catch(error){
            console.log(error);
        }

    }
};  


module.exports = PerguntaController;