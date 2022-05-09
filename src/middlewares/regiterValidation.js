const {body} = require('express-validator');
const users = require('../../db/userdb.json');

module.exports = [
    body('firstName').notEmpty().withMessage('El nombre es requerido'),
    body('lastName').notEmpty().withMessage('El apellido es requerido'),
    body('email').notEmpty().withMessage('El mail es requerido')
        .isEmail().withMessage('El valor ingresado debe ser un email')
        .custom((value) => {
            users.forEach(user => {
                if(user.email == value){
                    throw new Error('El email ingresado se encuentra en uso');
                }              
            });
            return true;
        }),
    body('password').trim()
    .notEmpty().withMessage('El password es requerido')
    .isStrongPassword().withMessage('El password debe contener un caracter en mayuscula, uno en minuscula, un numero y un caracter especial')
    .not().contains('password').withMessage('El password no debe contener la palabra password')
    .isLength({ min: 8 }).withMessage('Debe contener al menos 8 caracteres'),
    body('password-2').trim().custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('La contraseña debe ser igual a la confirmacion');
        }
        return true;
    }),
]


