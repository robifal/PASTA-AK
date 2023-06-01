const {Edufisica : Edufisica }= require('../models/Edufisica');



const edufisicaController = {

  

    perguntas: async(req, res) => {
        try{


            const perguntaEdufisica = {
                question: req.body.question,
                alternative: req.body.alternative,
                response: req.body.response
            }

  

            const response = await Edufisica.create(perguntaEdufisica);

            res.json({msg: "Perguntas de Educação Fisica cadastrada!"});


        }catch(error){
            console.log(error);
        }
   },


   delete: async(req, res) => {
    try{

        const  id = req.params.id;

        const cadastroF = await Edufisica.findById(id);
        console.log(cadastroF);


        if (!cadastroF) {
            res.status(404).json({msg: 'Cadastro não encontrado.'})
            return; 

        }

        const deleteCadastro = await Edufisica.findByIdAndDelete(id);

        res.status(200).json(deleteCadastro);


    }catch(error){
        console.log(error);
    }
}

};  


module.exports = edufisicaController;