const {validationResult} = require('express-validator');
const fs = require('fs');

const controller = {

    loginPost: (req, res) => {

        const usersdb = JSON.parse(fs.readFileSync('./db/userdb.json','utf-8'));
        const errors = validationResult(req);

        if(errors.isEmpty()){

            const {email, password} = req.body;
            var estaRegistrado = false;


            usersdb.forEach(userdb => {

                if(userdb.email == email && userdb.password == password ){
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


    registerGet: (req, res) => {
        
        return res.render('./pages/register', {okMsg:'', errors: []});
    },


    registerPost: (req, res) => {

        const errors = validationResult(req);
        const users = JSON.parse(fs.readFileSync("./db/userdb.json", 'utf-8'));
        const okMsg = ('Cuenta creada correctamente');
        if(errors.isEmpty()){

            const {firstName, lastName, email, password} = req.body;
            let newUser= {
                id: new Date,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                profilePicture:'',
                deleted: false,
            }

            users.push(newUser);
            
            fs.writeFileSync("./db/userdb.json",JSON.stringify(users));


            res.render('./pages/register',{okMsg: okMsg, errors:[]});

        }else{
            res.render('./pages/register',  {okMsg: '' , errors: errors.array()})
        }
     
    },

}
module.exports = controller;