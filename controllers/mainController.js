var categories = [{src:"/images/electronica.svg", alt:"icono de electrónica", nombre: "Electrónica"},{src:"/images/alimentos.svg", alt:"icono de alimentos", nombre: "Alimentos"}, {src:"/images/bebidas.svg", alt:"icono de bebidas", nombre: "Bebidas"}, {src:"/images/indumentaria.svg", alt:"icono de indumentaria", nombre: "Indumentaria"},{src:"/images/juegos.svg", alt:"icono de juegos", nombre: "Juegos"},{src:"/images/automotor.svg", alt:"icono de automóvil", nombre: "Automotor"},{src:"/images/hogar.svg", alt:"icono de hogar", nombre: "Hogar"},{src:"/images/otros.svg", alt:"icono de otros", nombre: "Otros"}]

var puedeInteresar = [{src:"/images/jackdaniels.svg", alt:"foto jack daniels", nombre: "Wiskey Jack Daniels Honey 750ml", puntos: 19.000},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"}]
var masPedidos = [{src:"/images/cocacola.svg", alt:"foto cocacola", nombre: "Coca Cola Lata 220mL Pack Original x8", puntos: 760},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"},{src:"/images/productogenerico.svg", alt:"foto producto generico", nombre: "NOMBRE DEL PRODUCTO O SERVICIO", puntos: "XX.XXX"}]

/* el objeto controller con cada atributo asociado a una funcion req/res */
const controller = {

    index: (req, res) => {
        
        return res.render('./pages/index',{puedeInteresar, masPedidos, categories});
    },
    products: (req, res) => {
        
        return res.render('./pages/product',);
    },
    cart: (req, res) => {

        return res.render('./pages/cart',);
    },
    checkout: (req, res) => {

        return res.render('./pages/checkout');
    },
    register: (req, res) => {
        
        return res.render('./pages/register');
    },
    login: (req, res) => {

        return res.renders('./pages/login');
    },

}


module.exports = controller;