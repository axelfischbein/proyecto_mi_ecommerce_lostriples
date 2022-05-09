
var cartItems = [{src:"images/jackdaniels_cartitem.svg", alt:"icono jack daniels", name:"Jack Daniel's Tennessee Honey Botella 750 mL", price:"19.900", cant: 1,},{src:"images/hamburguesa_cartitem.svg", alt:"icono combo hamburguesa", name:"1 Combo Hamburguesa", price:"5.000",cant: 1,},{src:"images/cocacola_cartitem.svg", alt:"icono coca cola", name:"Coca Cola Lata 220mL Pack Original x8", price:"1.520", cant: 2,}]

const controller = {

    cart: (req, res) => {

        return res.render('./pages/cart',{cartItems});
    },
    checkout: (req, res) => {

        return res.status(501).render('pages/501page');
    },

}



module.exports = controller;