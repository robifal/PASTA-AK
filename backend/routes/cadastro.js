const router = require("express").Router()

const CadastroController = require("../controllers/cadastroController");


router.route('/cadastro').post((req, res) => CadastroController.create(req, res));
module.exports = router