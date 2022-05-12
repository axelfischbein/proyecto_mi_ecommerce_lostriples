//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {getProducts,getMostWantedProducts, getSuggested,getCategories,quitarProductoDelCarrito,getCart,agregarProductoDelCarrito} = require('./apiController');

//rutas
router.get('/products/:_id', getProducts);
router.get('/mostmostWanted/:id?', getMostWantedProducts);
router.get('/suggested/:id?', getSuggested);
router.get('/categories', getCategories);
router.get('/cart', getCart);
router.delete('/quitarProducto/:_id', quitarProductoDelCarrito); 
router.post('/agregarProducto/:_id', agregarProductoDelCarrito);

module.exports = router;