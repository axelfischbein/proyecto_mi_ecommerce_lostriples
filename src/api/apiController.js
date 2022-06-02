const productsdb = require("../../db/productsdb.json");
const oldproductsdb = require("../../db/oldproductsdb.json");
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

        let oldCartItems = cartItems;
        let newCartdb = cartdb;

        let lastItem = false;
        oldCartItems.forEach(cartProduct => {
            if(cartProduct._id == _id && cartProduct.cant>1) {
                lastItem = true;
                cartProduct.cant--;
                newCartdb.totalPrice -= Number(cartProduct.price);
                newCartdb.cartItems = oldCartItems;
            }
            if(lastItem == false){
                if(cartProduct.cant == 1){
                    newCartdb.cartItems = newCartdb.cartItems.filter(cartProduct => cartProduct._id != _id);
                    newCartdb.totalPrice -= Number(cartProduct.price);
                }
            }
        });
        

        
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

            products.forEach(product => {
                if(product._id == _id) {
                    let {src, alt, nombre, puntos} = product;

                    newCartItems.push(
                        {"_id": _id, "src":src, "alt":alt, "name":nombre, "price":puntos, "cant": 1}
                    );
                    newCartdb.totalPrice += Number(puntos);
                    newCartdb.cartItems = newCartItems;
                }
            });
        }
        
        fs.writeFileSync("./db/cartdb.json",JSON.stringify(newCartdb));

        return res.send(productsdb);
    },

    getProducts: (req, res) => {
        const {_id} = req.params;
        
        products.forEach(product => {
            if(product._id == _id) {
                return res.send(product);
            }
        });
        return res.send("no se ha encontrado");
        
    },

    getAllProducts: (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        return res.send(products);
    },

    editProduct: (req, res) => {
        
        const {_id} = req.params;
        const {nombre, puntos, stock, description, store, gallery} = req.body;
        
        let newProductsDb = productsdb;        
        let newProducts = products;
        let newProduct = {};
        
        newProducts.forEach(product => {
            if(product._id == _id) {
                newProduct = {
                    "_id": _id,
                    "category":product.category,
                    "nombre":nombre,
                    "description":description,
                    "src":gallery[0],
                    "alt":nombre,
                    "puntos": puntos,
                    "gallery": gallery,
                    "mostwanted": product.mostwanted,
                    "suggested": product.suggested,
                    "stock": stock,
                    "store": store,
                    "__v": product.__v
                };
            }
        });

        newProducts = newProducts.filter(product => product._id != _id);
        newProducts.push(newProduct);

        newProducts.sort(function (a, b) {
            if (parseInt(a._id) > parseInt(b._id)) {
              return 1;
            }
            if (parseInt(a._id) < parseInt(b._id)) {
              return -1;
            }
            // a must be equal to b
            return 0;
        });

        newProductsDb.productos = newProducts;

        fs.writeFileSync("./db/productsdb.json",JSON.stringify(newProductsDb));
        res.send(newProductsDb);
    },

    newProduct: (req, res) => {

        const _id = products.length + 1;
        const {nombre, puntos, stock, description, store, gallery} = req.body;
        
        let newProductsDb = productsdb;        
        let newProducts = products;
        
        let newProduct = {
            "_id": _id,
            "category":"Otros",
            "nombre":nombre,
            "description":description,
            "src":gallery[0],
            "alt":nombre,
            "puntos": puntos,
            "gallery": gallery,
            "mostwanted": false,
            "suggested": false,
            "stock": stock,
            "store": store,
            "__v": 0
        };
        
        newProducts.push(newProduct);
        newProducts.sort(function (a, b) {
            if (parseInt(a._id) > parseInt(b._id)) {
              return 1;
            }
            if (parseInt(a._id) < parseInt(b._id)) {
              return -1;
            }
            // a must be equal to b
            return 0;
        });

        newProductsDb.productos = newProducts;

        fs.writeFileSync("./db/productsdb.json",JSON.stringify(newProductsDb));
        return res.send(newProductsDb);
    },

    reiniciarProductos: (req, res) => {
        fs.writeFileSync("./db/productsdb.json",JSON.stringify(oldproductsdb));
        return res.send(oldproductsdb);
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