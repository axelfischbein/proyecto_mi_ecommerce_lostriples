//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {getProducts,getMostWantedProducts, getSuggested,getCategories} = require('../controllers/apiController');

//rutas
router.get('/products/:_id', getProducts);
router.get('/mostmostWanted/:id?', getMostWantedProducts);
router.get('/suggested/:id?', getSuggested);
router.get('/categories', getCategories);


module.exports = router;