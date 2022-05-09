const {validationResult} = require('express-validator');
const fs = require('fs');

const controller = {

    register: (req, res) => {

        return res.render('./pages/register');
    },

    loginPost: (req, res) => {

        const usersdb = JSON.parse(fs.readFileSync('./db/userdb.json','utf-8'));
        const errors = validationResult(req);

        if(errors.isEmpty()){

            const {user, pass} = req.body;
            var estaRegistrado = false;

            usersdb.forEach(userdb => {

                if(userdb.user == user.trim() && userdb.pass == pass.trim() ){
                    estaRegistrado = true;
                }
                
            });

            if(estaRegistrado){
                res.redirect('/');
            }else{
                res.render('./pages/login', {errors: [], estaRegistrado});
            }

        }else{

            res.render('./pages/login', {errors:errors.array(), estaRegistrado: null});
        }

    },
    loginGet: (req, res) => {

        res.render('./pages/login', {errors: [], estaRegistrado: null});
        
    },

}


module.exports = controller;