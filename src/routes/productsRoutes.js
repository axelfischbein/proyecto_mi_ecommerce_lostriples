//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {productDetail} = require('../controllers/productsController');

//rutas
router.get('/detail/:_id', productDetail);

module.exports = router;