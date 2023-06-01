const {Informatica : Informatica }= require('../models/Informatica');



const informaticaController = {

  

    perguntas: async(req, res) => {
        try{


            const perguntaInformatica = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

  

            const response = await Informatica.create(perguntaInformatica);

            res.json({msg: "Perguntas de Informatica cadastrada!"});


        }catch(error){
            console.log(error);
        }

    }
};  


module.exports = informaticaController;