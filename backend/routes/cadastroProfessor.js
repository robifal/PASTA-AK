const router = require("express").Router()

const CadastropfController = require("../controllers/cadastropfController");

router.route('/cadastropf').post((req, res) => CadastropfController.create(req, res));


module.exports = router