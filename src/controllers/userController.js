const {validationResult} = require('express-validator');
const userdb = require("../../db/userdb.json");

const controller = {

    register: (req, res) => {

        return res.render('./pages/register');
    },
    login: (req, res) => {

        const errors = validationResult(req);
        console.log(errors);

        if(errors.isEmpty()){

            res.send('logeado');
        }else{

            res.render('login', {errors:errors.array(),});
        }

    },

}


module.exports = controller;