//dependencias
const express = require('express');
const router = express.Router();
//controllers
const {index} = require('../controllers/homeController');

//rutas
router.get('/', index);

module.exports = router;