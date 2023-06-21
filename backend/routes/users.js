const router = require("express").Router();

const userController = require("../controllers/userController");

router.route("/login").get((req, res) => userController.login(req, res));

module.exports = router;
