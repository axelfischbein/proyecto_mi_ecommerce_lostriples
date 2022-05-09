const fetch = require('node-fetch');
const urlBase = 'http://localhost:3030/api';

const controller = {

    cart: async(req, res) => {

        try {
            const responseSuggested = await fetch(`${urlBase}/suggested/4`);
            const suggested = await responseSuggested.json();
            const responseMostWanted = await fetch(`${urlBase}/mostmostWanted/8`);
            const mostWanted = await responseMostWanted.json();
            const responseCategories = await fetch(`${urlBase}/categories`);
            const categories = await responseCategories.json();
            const responseCartdb = await fetch(`${urlBase}/cart`);
            const cartdb = await responseCartdb.json();

            return res.render('./pages/cart',{suggested, mostWanted, categories, cartdb});

        } catch (error) {
            console.log(error);
        }
    },
    checkout: (req, res) => {

        return res.status(501).render('pages/501page');
    },

}



module.exports = controller;