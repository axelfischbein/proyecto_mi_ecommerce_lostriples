const fetch = require('node-fetch');
const urlBase = 'http://localhost:3030/api';


/* el objeto controller con cada atributo asociado a una funcion req/res */
const controller = {

    productDetail: async(req, res) => {
        
        try {
            const responseSuggested = await fetch(`${urlBase}/suggested/4`);
            const suggested = await responseSuggested.json();
            const responseCategories = await fetch(`${urlBase}/categories`);
            const categories = await responseCategories.json();

            return res.render('./pages/product',{suggested, categories});

        } catch (error) {
            console.log(error);
        }
    },
}


module.exports = controller;