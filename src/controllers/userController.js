const controller = {

    register: (req, res) => {
        
        return res.render('./pages/register');
    },
    login: (req, res) => {
        
        return res.render('./pages/login');
    },

}


module.exports = controller;