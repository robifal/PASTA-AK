const { log } = require('console')
const express = require('express')

const server = express()

server.listen('3002', function(){
    console.log('server rodado na porta 3002');
})
