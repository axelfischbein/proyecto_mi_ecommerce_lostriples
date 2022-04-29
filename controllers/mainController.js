

/* el objeto controller con cada atributo asociado a una funcion req/res */
const controller = {

    index: (req, res) => {
        
        return res.render('/pages/index',);
    },
    products: (req, res) => {
        
        return res.render('/pages/product',);
    },
    cart: (req, res) => {

        return res.render('/pages/cart',);
    },
    checkout: (req, res) => {

        return res.render('/pages/checkout');
    },
    register: (req, res) => {
        
        return res.send('/pages/register');
    },
    login: (req, res) => {

        return res.send('/pages/login');
    },

}


module.exports = controller;