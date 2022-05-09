const fs = require('fs');
const {validationResult} = require('express-validator');

const controller = {

    registerGet: (req, res) => {
        
        return res.render('./pages/register', {okMsg:'', errors: []});
    },

    login: (req, res) => {
        
        return res.render('./pages/login');
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