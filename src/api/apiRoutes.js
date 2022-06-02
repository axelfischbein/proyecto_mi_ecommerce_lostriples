//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {reiniciarProductos, getAllProducts, getProducts, editProduct, newProduct, getMostWantedProducts, getSuggested,getCategories,quitarProductoDelCarrito,getCart,agregarProductoDelCarrito} = require('./apiController');

//rutas
router.get('/allproducts', getAllProducts);
router.get('/products/:_id', getProducts);
router.get('/mostmostWanted/:id?', getMostWantedProducts);
router.get('/suggested/:id?', getSuggested);
router.get('/categories', getCategories);
router.get('/cart', getCart);
router.delete('/quitarProducto/:_id', quitarProductoDelCarrito); 
router.post('/agregarProducto/:_id', agregarProductoDelCarrito);
router.put('/editarProducto/:_id', editProduct);
router.put('/agregarNuevoProducto', newProduct);
router.put('/reiniciarProductos', reiniciarProductos);

module.exports = router;