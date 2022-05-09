//dependencias
const express = require('express');
const router = express.Router();
//controllers
const { loginGet, loginPost, registerGet, registerPost} = require('../controllers/userController');

//middlewares
const loginValidation = require('../middlewares/loginValidation');
const registerValidation = require('../middlewares/regiterValidation');

//rutas
router.get('/login', loginValidation, loginGet);
router.post('/login', loginValidation, loginPost);
router.get('/register', registerGet);
router.post('/register', registerValidation, registerPost);

module.exports = router;