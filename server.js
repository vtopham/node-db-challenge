const express = require('express');
const PMRouter = require('./api/pm_router');

const server = express();
server.use(express.json());

server.use('/api', PMRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "Server is up and running"})
})

module.exports = server