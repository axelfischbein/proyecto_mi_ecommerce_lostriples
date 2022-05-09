const fetch = require('node-fetch');
const urlBase = 'http://localhost:3030/api';

const controller = {

    index: async (req, res) => {

        try {
            const responseSuggested = await fetch(`${urlBase}/suggested/4`);
            const suggested = await responseSuggested.json();
            const responseMostWanted = await fetch(`${urlBase}/mostmostWanted/8`);
            const mostWanted = await responseMostWanted.json();
            const responseCategories = await fetch(`${urlBase}/categories`);
            const categories = await responseCategories.json();

            return res.render('./pages/index',{suggested, mostWanted, categories});

        } catch (error) {
            console.log(error);
        }
    },

}


module.exports = controller;