const productsdb = require("../../db/productsdb.json");
const controller = {

    getAllProducts: (req, res) => {

        
        return res.send(productsdb.productos);
    },
    getCategories: (req,res) => {

        return res.send(productsdb.categories);
    },
    getMostWantedProducts: (req, res) => {

        
        const mostWanted = [];
        const products = productsdb.productos;
        const {id} = req.params;

        let idaux = id || products.length;

        products.forEach(product => {
            if((product.mostwanted == true) && idaux>0){
                mostWanted.push(product);
                idaux--;
            }
        });
        if(mostWanted.length < id){
            while(mostWanted.length != id){
                mostWanted.push(products[0]);
            }
        }
        

        return res.send(mostWanted);
    },
    getSuggested: (req, res) => {

        const suggested = [];
        const products = productsdb.productos;
        const {id} = req.params;

        let idaux = id || products.length;

        products.forEach(product => {
            if((product.suggested == true) && idaux>0){
                suggested.push(product);
            }
        });
        if(suggested.length < id){
            while(suggested.length != id){
                suggested.push(products[0]);
            }
        }
        

        return res.send(suggested);
    },

}

module.exports = controller;