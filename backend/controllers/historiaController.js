const { Historia : Historia} = require('../models/Historia');


const historiaController = {

    perguntas: async(req, res) => {
        try{
            
            const perguntaHistoria = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

            const response = await Historia.create(perguntaHistoria)/

            res.json({msg: "Pergunta De Historia Cadastrada!"});

        }catch(error){
            console.log(error);
        }



    }

};

module.exports = historiaController