const productsdb = require("../../db/productsdb.json");
const controller = {

    getAllProducts: (req, res) => {

        return res.send();
    },
    getMostWantedProducts: (req, res) => {

        const mostWanted = [];
        const products = productsdb.productos;

        products.forEach(product => {
            if(product.mostwanted == true){
                mostWanted.push(product);
            }
        });

        return res.send(mostWanted);
    },

}

module.exports = controller;