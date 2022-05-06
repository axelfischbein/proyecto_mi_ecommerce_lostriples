//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {registerGet, login, registerPost} = require('../controllers/userController');
// middlewares
const registerValidation = require('../middlewares/regiterValidation');

//rutas
router.get('/register', registerGet);
router.get('/login', login);
router.post('/register', registerValidation, registerPost);

module.exports = router;