const { CadastroModel: CadastroModel } = require("../models/Cadastro");
const { CadastroProfeModel } = require("../models/CadastroProfessor");

const CadastroController = {
  create: async (req, res) => {
    try {
      const cadastroAluno = {
        nome: req.body.data.nome,
        telephone: req.body.data.telefone,
        email: req.body.data.email,
        password: req.body.data.senha,
      };

      const cadastroProfessor = {
        name: req.body.data.nome,
        telephone: req.body.data.telefone,
        email: req.body.data.email,
        password: req.body.data.senha,
        curriculo: req.body.data.curriculo,
      };

      const cadastroBusca = await CadastroModel.find({ email: req.body.email });

      if (cadastroBusca.length !== 0) {
        console.log("Usuario já encontrado!");

        res.status(401).json({ msg: "Usuario Já existente!" });
      } else {
        console.log("Usuario não encontrado!");
        console.log("aki");

        if (req.body.data.professor) {
          console.log(cadastroProfessor);
          const response = await CadastroProfeModel.create(cadastroProfessor);
          console.log(response);
        } else {
          const response = await CadastroModel.create(cadastroAluno);
          console.log(response);
        }

        res.status(200).json({ msg: "Usuario Cadastrado!" });
      }
    } catch (error) {
      console.log("error");
    }
  },

  getAll: async (req, res) => {
    try {
      const cadastros = await CadastroModel.find();

      res.json(cadastros);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const cadastro = await CadastroModel.findById(id);

      if (!cadastro) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }

      res.status(200).json(cadastro);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.iu;

      const cadastro = await CadastroModel.findById(id);

      if (!cadastro) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }

      const deleteCadastro = await CadastroModel.findByIdAndDelete(id);

      res.status(200).json(deleteCadastro);
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    const cadastro = {
      name: req.body.name,
      telephone: req.body.telephone,
      email: req.body.email,
      password: req.body.password,
    };

    const updateCadastro = await CadastroModel.findByIdAndUpdate(id, cadastro);

    if (!updateCadastro) {
      res.status(404).json({ msg: "Serviço não encontrado." });
      return;
    }

    res.status(200).json({ cadastro, msg: "Serviço atualizado com sucesso!" });
  },
};

module.exports = CadastroController;
