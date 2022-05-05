//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {cart, checkout} = require('../controllers/cartController');

//rutas
router.get('/', cart);
router.get('/', checkout);


module.exports = router;