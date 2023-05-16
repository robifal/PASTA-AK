const router = require("express").Router();

const perguntaController = require('../controllers/perguntasController');

router.route('/pergunta').post((req, res) => perguntaController.perguntas(req, res));

module.exports = router