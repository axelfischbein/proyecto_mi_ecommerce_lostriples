const productsdb = require("../../db/productsdb.json");
const cartdb = require("../../db/cartdb.json");
const products = productsdb.productos;
const cartItems = cartdb.cartItems;

const fs = require('fs');

const controller = {

    getCart: (req, res)=>{

        return res.send(cartdb);
    },
    quitarProductoDelCarrito: (req,res)=>{

        const {_id} = req.params;

        let newCartItems = [];
        let oldCartItems = cartItems;
        let newCartdb = cartdb;

        let estaEnElCarrito = false;
        oldCartItems.forEach(cartProduct => {
            if(cartProduct._id == _id && cartProduct.cant>1) {
                estaEnElCarrito = true;
                cartProduct.cant--;
                newCartdb.totalPrice -= Number(cartProduct.price);
                newCartdb.cartItems = oldCartItems;
            }
        });

        if(estaEnElCarrito == false){
            cartItems.forEach(cartProduct => {
                if(cartProduct._id != _id) {
                    newCartdb.totalPrice -= Number(cartProduct.price);
                    newCartItems.push(cartProduct);
                }
            });
            newCartdb.cartItems = newCartItems;
        }
        
        fs.writeFileSync("./db/cartdb.json",JSON.stringify(newCartdb));
        
        return res.send(newCartdb.cartItems);
    },
    agregarProductoDelCarrito: (req,res)=>{

        const {_id} = req.params;
        let newCartItems = cartItems;
        let newCartdb = cartdb;
        
        let estaEnElCarrito = false;
        newCartItems.forEach(cartProduct => {
            if(cartProduct._id == _id) {
                estaEnElCarrito = true;
                cartProduct.cant++;
                newCartdb.totalPrice += Number(cartProduct.price);
                newCartdb.cartItems = newCartItems;
            }
        });

        if(estaEnElCarrito == false){
            let src,alt,name,price,cant;

            products.forEach(product => {
                if(product._id == _id) {
                    src = product.src;
                    alt = product.alt;
                    name = product.nombre;
                    price = product.puntos;
                    cant = 1;

                    newCartItems.push(
                        {"_id": _id, "src":src, "alt":alt, "name":name, "price":price, "cant": 1}
                    );
                    newCartdb.totalPrice += Number(price);
                    newCartdb.cartItems = newCartItems;
                }
            });
        }
        
        fs.writeFileSync("./db/cartdb.json",JSON.stringify(newCartdb));

        return res.send(newCartItems);
    },

    getProducts: (req, res) => {
        const {_id} = req.params;
        
        products.forEach(product => {
            if(product._id == _id) {
                return res.send(product);
            }
        });
        
    },
    getCategories: (req,res) => {

        return res.send(productsdb.categories);
    },
    getMostWantedProducts: (req, res) => {

        
        const mostWanted = [];
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