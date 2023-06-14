const {cadastroProfeModel : cadastroProfeModel} = require("../models/CadastroProfessor");

const CadastropfController = {

    create: async (req, res) => {
        try{    

            const cadastroProfessors = {
                name: req.body.data.nome,
                telephone: req.body.data.telefone,
                email: req.body.data.email,
                password: req.body.data.senha
            };


            const cadastropfAll = await cadastroProfeModel.find();

            const cadastropfBuscar = await cadastroProfeModel.find({email: req.body.email})

            if (cadastropfBuscar.length !== 0) {

                res.status(401).json({msg: "Usuario já existente!"});
            }else{

                const response = await cadastroProfeModel.create(cadastroProfessors);

                res.status(200).json({msg: "Usuario Cadastrado!"});
            }

        }catch(erro){
            console.log(erro);
        }
    },


};

module.exports = CadastropfController;