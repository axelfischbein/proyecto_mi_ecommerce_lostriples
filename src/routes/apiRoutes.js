//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {getProducts,getMostWantedProducts, getSuggested,getCategories,quitarProductoDelCarrito,getCart,agregarProductoDelCarrito} = require('../controllers/apiController');

//rutas
router.get('/products/:_id', getProducts);
router.get('/mostmostWanted/:id?', getMostWantedProducts);
router.get('/suggested/:id?', getSuggested);
router.get('/categories', getCategories);
router.get('/cart', getCart);
router.get('/quitarProducto/:_id', quitarProductoDelCarrito);
router.get('/agregarProducto/:_id', agregarProductoDelCarrito);



module.exports = router;