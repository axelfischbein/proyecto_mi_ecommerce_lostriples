var categories = [{src:"/images/electronica.svg", alt:"icono de electrónica", nombre: "Electrónica"},{src:"/images/alimentos.svg", alt:"icono de alimentos", nombre: "Alimentos"}, {src:"/images/bebidas.svg", alt:"icono de bebidas", nombre: "Bebidas"}, {src:"/images/indumentaria.svg", alt:"icono de indumentaria", nombre: "Indumentaria"},{src:"/images/juegos.svg", alt:"icono de juegos", nombre: "Juegos"},{src:"/images/automotor.svg", alt:"icono de automóvil", nombre: "Automotor"},{src:"/images/hogar.svg", alt:"icono de hogar", nombre: "Hogar"},{src:"/images/otros.svg", alt:"icono de otros", nombre: "Otros"}]

var puedeInteresar = [{src:"/images/jackdaniels.svg", alt:"foto jack daniels", nombre: "Wiskey Jack Daniels Honey 750ml", puntos: "19.000"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"}]
var masPedidos = [{src:"/images/cocacola.svg", alt:"foto cocacola", nombre: "Coca Cola Lata 220mL Pack Original x8", puntos: "760"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"}]

var cartItems = [{src:"images/jackdaniels_cartitem.svg", alt:"icono jack daniels", name:"Jack Daniel's Tennessee Honey Botella 750 mL", price:"19.900", cant: 1,},{src:"images/hamburguesa_cartitem.svg", alt:"icono combo hamburguesa", name:"1 Combo Hamburguesa", price:"5.000",cant: 1,},{src:"images/cocacola_cartitem.svg", alt:"icono coca cola", name:"Coca Cola Lata 220mL Pack Original x8", price:"1.520", cant: 2,}]
/* el objeto controller con cada atributo asociado a una funcion req/res */
const controller = {

    index: (req, res) => {
        
        return res.render('./pages/index',{puedeInteresar, masPedidos, categories});
    },
    products: (req, res) => {
        
        return res.render('./pages/product', {puedeInteresar, masPedidos, categories});
    },
    cart: (req, res) => {

        return res.render('./pages/cart',{cartItems});
    },
    checkout: (req, res) => {

        return res.render('./pages/checkout');
    },
    register: (req, res) => {
        
        return res.render('./pages/register');
    },
    login: (req, res) => {

        return res.render('./pages/login');
    },

}


module.exports = controller;