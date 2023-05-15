const router = require("express").Router()

const CadastroController = require("../controllers/cadastroController");



router.route('/cadastro').post((req, res) => CadastroController.create(req, res));


router.route('/cadastros').get((req, res) => CadastroController.getAll(req, res));

router.route('/cadastros/:id').get((req, res) => CadastroController.get(req, res));

router.route('/cadastros/:id').delete((req, res) => CadastroController.delete(req, res));

router.route('/cadastro/:id').put((req, res) => CadastroController.update(req, res));

module.exports = router