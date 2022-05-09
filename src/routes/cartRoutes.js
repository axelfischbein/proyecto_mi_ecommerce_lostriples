//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {cart, checkout} = require('../controllers/cartController');

//rutas
router.get('/cart', cart);
router.get('/checkout', checkout);


module.exports = router;