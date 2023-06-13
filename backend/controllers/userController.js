const userModel = require('../models/Users');
const {CadastroModel : CadastroModel} = require("../models/Cadastro");


const userController = {
    login: async(req, res) => {
        try{
            const user = {
                email: req.body.email,
                password: req.body.senha
            }

                    const usersAll = await CadastroModel.find();
               
                    



            usersAll.forEach(function({email, password}){

                if (user.email === email && user.password === password) {
                        
                    const acesso = true;
                    
                    res.status(200).json(acesso);

                }else {

                    const acesso = false;
                    
                    res.status(200).json(acesso);

                }
            })

                 

        }catch(error){
            console.log(error);
        }
    }

}; 

module.exports = userController; 