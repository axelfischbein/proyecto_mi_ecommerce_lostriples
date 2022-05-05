//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {register, login} = require('../controllers/userController');

//rutas
router.get('/', register);
router.get('/', login);


module.exports = router;