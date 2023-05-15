const router = require('express').Router()

// Cadastro router

const cadastroRouter = require("./cadastro");

router.use('/', cadastroRouter);

// User router


const userRouter = require("./users");

router.use('/', userRouter);

module.exports = router