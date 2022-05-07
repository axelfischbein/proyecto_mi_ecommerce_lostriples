var categories = [{src:"/images/electronica.svg", alt:"icono de electrónica", nombre: "Electrónica"},{src:"/images/alimentos.svg", alt:"icono de alimentos", nombre: "Alimentos"}, {src:"/images/bebidas.svg", alt:"icono de bebidas", nombre: "Bebidas"}, {src:"/images/indumentaria.svg", alt:"icono de indumentaria", nombre: "Indumentaria"},{src:"/images/juegos.svg", alt:"icono de juegos", nombre: "Juegos"},{src:"/images/automotor.svg", alt:"icono de automóvil", nombre: "Automotor"},{src:"/images/hogar.svg", alt:"icono de hogar", nombre: "Hogar"},{src:"/images/otros.svg", alt:"icono de otros", nombre: "Otros"}]

const {puedeInteresar, masPedidos} = require("../../db/products.json");

const controller = {

    index: (req, res) => {
        return res.render('./pages/index',{puedeInteresar, masPedidos, categories});
    },

}


module.exports = controller;