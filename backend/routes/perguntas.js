const router = require("express").Router();

const perguntaController = require("../controllers/perguntasController");
const matematicaController = require("../controllers/matematicaController");
const portguesController = require("../controllers/portguesController");
const historiaController = require("../controllers/historiaController");
const edufisicaController = require("../controllers/edufisicaController");
const artesController = require("../controllers/artesController");
const informaticaController = require("../controllers/informaticaController");

// - POST PERGUNTAS

router
  .route("/perguntas")
  .post((req, res) => perguntaController.perguntas(req, res));

// - MATEMATICA
router
  .route("/matematica")
  .post((req, res) => matematicaController.perguntas(req, res));

// - PORTUGUÊS
router
  .route("/portugues")
  .post((req, res) => portguesController.perguntas(req, res));

// - HISTORIA
router
  .route("/historia")
  .post((req, res) => historiaController.perguntas(req, res));

// - EDUCAÇÃO FISICA
router
  .route("/edufisica")
  .post((req, res) => edufisicaController.perguntas(req, res));

router
  .route("/edufisica/:id")
  .delete((req, res) => edufisicaController.delete(req, res));

// - ARTES
router.route("/artes").post((req, res) => artesController.perguntas(req, res));

// - INFORMATICA
router
  .route("/informatica")
  .post((req, res) => informaticaController.perguntas(req, res));

//--------------------------------------

// GET PERGUNTAS

router
  .route("/perguntas")
  .get((req, res) => perguntaController.perguntas(req, res));

// - ARTES
router.route("/artes").get((req, res) => artesController.perguntas(req, res));

// - HISTORIA
router.route("/historia").get((req, res) => historiaController.get(req, res));

// - PORTUGUÊS
router
  .route("/portugues")
  .get((req, res) => portguesController.perguntas(req, res));

// - MATEMATICA
router
  .route("/matematica")
  .get((req, res) => matematicaController.perguntas(req, res));

// - INFORMATICA
router
  .route("/informatica")
  .get((req, res) => informaticaController.perguntas(req, res));

// - EDUCAÇÃO FISICA
router
  .route("/edufisica")
  .get((req, res) => edufisicaController.perguntas(req, res));

module.exports = router;
