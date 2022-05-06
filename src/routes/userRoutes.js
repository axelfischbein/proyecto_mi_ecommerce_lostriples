//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {register, login} = require('../controllers/userController');

//middlewares
const loginValidation = require('../middlewares/loginValidation');

//rutas
router.get('/', login);
router.get('/', register);


module.exports = router;