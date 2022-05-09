const {body} = require('express-validator');

module.exports = [
    body('user').trim().notEmpty().withMessage("El nombre es requerido").isEmail().withMessage("Debe ser un email válido"),
    body('pass').trim().notEmpty().withMessage("La contraseña es requerida")
];