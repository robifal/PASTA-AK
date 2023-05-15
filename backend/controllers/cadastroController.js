const {CadastroModel : CadastroModel} = require("../models/Cadastro");

const CadastroController = {

    create: async (req, res) => {
        try {
            const cadastro = {
                name: req.body.name,
                dateYear: req.body.dateYear,
                email: req.body.email,
                password: req.body.password
            };

         
                const cadastroAll = await CadastroModel.find();                

                const cadastroBusca = await CadastroModel.find({email: req.body.email})

                console.log(cadastroBusca);
                
                
                if (cadastroBusca.length !== 0 ) {
                    console.log('Usuario encontrado!');

                    res.status(401).json({msg: "Usuario Já existente!"})

                }else{
                    console.log('Usuario não encontrado!');

                    const response = await CadastroModel.create(cadastro);


                    res.status(200).json({msg: "Usuario Cadastrado!"})
                }


        } catch (error) {
            console.log(error);
        }


    },


    getAll: async (req, res) => {
        try{

            const cadastros = await CadastroModel.find();

            res.json(cadastros);

        }catch(error){
            console.log(error);
        }
    },
    get: async(req, res) => {
        try{

            const id = req.params.id
            const cadastro = await CadastroModel.findById(id);

            if (!cadastro) {
                res.status(404).json({msg: 'Serviço não encontrado.'})
                return;

            }

            res.status(200).json(cadastro);


        }catch(error){
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try{

            const id = req.params.iu;

            const cadastro = await CadastroModel.findById(id);


            if (!cadastro) {
                res.status(404).json({msg: 'Serviço não encontrado.'})
                return; 

            }

            const deleteCadastro = await CadastroModel.findByIdAndDelete(id);

            res.status(200).json(deleteCadastro);


        }catch(error){
            console.log(error);
        }
    },
    update: async (req, res) => {

        const id = req.params.id;

        const cadastro = {
            name: req.body.name,
            dateYear: req.body.dateYear,
            email: req.body.email,
            password: req.body.password
        };

        const updateCadastro = await CadastroModel.findByIdAndUpdate(id, cadastro);

        if (!updateCadastro) {
            res.status(404).json({msg: 'Serviço não encontrado.'})
            return; 
        }

        res.status(200).json({cadastro, msg: 'Serviço atualizado com sucesso!'})
    },
};

module.exports = CadastroController;