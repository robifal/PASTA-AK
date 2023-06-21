const userModel = require("../models/Users");
const { CadastroModel: CadastroModel } = require("../models/Cadastro");

const userController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.headers;
      console.log(email, password);

      const usersDB = await CadastroModel.find({ email: email });
      console.log(usersDB);

      if (usersDB.length > 0) {
        usersDB.forEach(function ({ email: emailDB, password: passwordDB }) {
          if (email === emailDB && password === passwordDB) {
            const acesso = true;
            res.status(200).json({ status: acesso });
          }
        });
      } else {
        res.status(404).send("Oh vey Não encontrou!");
      }
    } catch (error) {
      console.log("login");
    }
  },
};

module.exports = userController;
