const { Router } = require('express');

//Importamos los routers
const user = require('./user.js');

const router = Router();

// Configuramos los routers
router.use('/users', user);


module.exports = router;