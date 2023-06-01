const {Artes : Artes}= require('../models/Artes');



const artesController = {

  

    perguntas: async(req, res) => {
        try{


            const perguntaArtes = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

  

            const response = await Artes.create(perguntaArtes);

            res.json({msg: "Perguntas de Artes cadastrada!"});


        }catch(error){
            console.log(error);
        }

    }
};  


module.exports = artesController;