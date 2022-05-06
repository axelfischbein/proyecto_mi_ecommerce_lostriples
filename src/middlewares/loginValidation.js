const {body} = require('express-validator');

module.exports = [
    body('user').notEmpty().withMessage("el nombre es requerido"),
    body('pass').notEmpty().withMessage("el pass es requerido")
];