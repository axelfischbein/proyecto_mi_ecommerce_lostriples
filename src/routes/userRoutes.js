//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {register, login} = require('../controllers/userController');

//rutas
router.get('/register', register);
router.get('/login', login);


module.exports = router;