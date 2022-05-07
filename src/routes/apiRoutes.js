//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {getAllProducts,getMostWantedProducts} = require('../controllers/apiController');

//rutas
router.get('/products', getAllProducts);
router.get('/mostWanted', getMostWantedProducts);


module.exports = router;