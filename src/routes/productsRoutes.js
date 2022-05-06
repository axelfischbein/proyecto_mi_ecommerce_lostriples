//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {products} = require('../controllers/productsController');

//rutas
router.get('/', products);

module.exports = router;