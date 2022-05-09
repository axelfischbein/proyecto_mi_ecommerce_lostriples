//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {getAllProducts,getMostWantedProducts, getSuggested,getCategories} = require('../controllers/apiController');

//rutas
router.get('/products', getAllProducts);
router.get('/mostmostWanted/:id?', getMostWantedProducts);
router.get('/suggested/:id?', getSuggested);
router.get('/categories', getCategories);


module.exports = router;