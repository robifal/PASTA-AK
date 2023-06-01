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
    },

    delete: async(req, res) => {
        try{

            const cadastroH = await Historia.findById(id)

            if(!cadastroH){
                res.status(404).json({msg: "Cadastro Não encontrado"})
                return;
            }

            const deleteCadastro = await Historia.findByIdAndDelete(id)

            res.status(200).json(deleteCadastro)

        }catch(error){
            console.log(error);
        }
    }

};

module.exports = historiaController