const {Cadastro : CadastroModel} = require("../models/Cadastro");

const CadastroController = {

    create: async (req, res) => {
        try {
            
            const cadastro = {
                name: req.body.name,
                dateYear: req.body.dateYear,
                email: req.body.email,
                password: req.body.password
            };

            const response = await CadastroModel.create(cadastro);

            res.status(201).json({response, msg: 'Cadastro criado com sucesso!'});

        } catch (error) {
            console.log(error);
        }
    }

};

module.exports = CadastroController;