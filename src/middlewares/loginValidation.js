const {body} = require('express-validator');

module.exports = [
    body('email').trim()
    .notEmpty().withMessage("El email es requerido")
    .isEmail().withMessage("Debe ingresar un email válido"),
    body('password').trim().notEmpty().withMessage("La contraseña es requerida")
];