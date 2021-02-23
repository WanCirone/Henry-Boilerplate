const server = require('express').Router();
const { User } = require('../db.js');


server.get('/', (req, res, next) => { 
    User.findAll()
    .then(users => {
        res.send(users);
    }) 
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    })
});

module.exports = server;