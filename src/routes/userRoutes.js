//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {register, loginGet, loginPost} = require('../controllers/userController');

//middlewares
const loginValidation = require('../middlewares/loginValidation');

//rutas
router.get('/login', loginValidation, loginGet);
router.post('/login', loginValidation, loginPost);
router.get('/register', register);


module.exports = router;