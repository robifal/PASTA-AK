const router = require('express').Router()

// Services router

const cadastroRouter = require("./cadastro")

router.use('/', cadastroRouter);

module.exports = router