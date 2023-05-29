const {Perguntas : Perguntas }= require('../models/Pergunta');



const artesController = {

  

    perguntas: async(req, res) => {
        try{


            const perguntaArtes = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

  

            const response = await Perguntas.create(perguntaArtes);

            res.json({msg: "Perguntas de Artes cadastrada!"});


        }catch(error){
            console.log(error);
        }

    }
};  


module.exports = artesController;