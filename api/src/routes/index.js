const { Router } = require('express');
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genresRoutes = require ("./genres_routes/genresRoutes")
const videogamesRoutes = require("./videogames_routes/videogamesRoutes")
const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



//VIDEOGAMES
router.use("/videogames", videogamesRoutes)
//GENRES
router.use("/genres", genresRoutes)



module.exports = router;
