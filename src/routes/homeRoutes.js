//dependencias
const express = require('express');
const router = express.Router();
//controllers
const mainController = require('../controllers/mainController');

//rutas
router.get('/', mainController.index);

module.exports = router;