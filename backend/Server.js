const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())


// DB connection

const conn = require('./db/conn');

conn();


// Routes

const routes = require("./routes/router");
server.use('/api', routes)


server.listen('3002', function(){
    console.log('server rodado na porta 3002');
})


