//dependencias
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;

//rutas
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');
const cartRoutes = require('./src/routes/cartRoutes');

//config
app.set('view engine', 'ejs');
app.set('views','./src/views');

//middlewares
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.use('/', homeRoutes);
app.use('/', userRoutes);
app.use('/', cartRoutes);

//404
app.use((req,res,next)=>{
    res.status(404).render('pages/404page');
    next();
});

//server
app.listen(PORT, ()=>{});