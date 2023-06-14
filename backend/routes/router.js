const router = require('express').Router()

// Cadastro router

const cadastroRouter = require("./cadastro");

router.use('/', cadastroRouter);

// User router


const userRouter = require("./users");

router.use('/', userRouter);

module.exports = router


// Pergunta router

const perguntaRouter = require("./perguntas");
                                
router.use('/', perguntaRouter);

module.exports = router


// CadastroProfessor router

const cadastroProfessorRouter = require("./cadastroProfessor");

router.use('/', cadastroProfessorRouter);

module.exports = router
