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
    },

        get: async(req, res) => {
            try{
                
                const Selector = await Historia.find()


                console.log(Selector);

                const randomPerguntas = await Historia.aggregate([  
                    // { $project: { a: 2, b: 2 } },
                    { $sample: {size: 5}}, 
                    { $skip: 0 }],
                    );

                            // console.log(randomPerguntas);

                        Historia.
                        aggregate([{ $match: { age: { $gte: 21 }}}]).
                        unwind('tags').
                        exec();

            }catch(erro){
                console.log(erro);
            }
        }

    

};

module.exports = historiaController