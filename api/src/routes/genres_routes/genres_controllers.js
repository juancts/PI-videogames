const { Router } = require("express");
const axios = require("axios");
require("dotenv").config();
const { Genres } = require("../../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { API_KEY } = process.env;
console.log("API KEY", API_KEY);
const router = Router();

const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//GET ALL GENRES
async function GET_searchAllGenres(req, res) {
  let allGenresApi = [];
  try {
    const getGenres = await axios.get(url).then((res) => res.data.results);
    
    allGenresApi = await getGenres.map((e, i) => e.name);
    allGenresApi.forEach((genre) => {
      Genres.findOrCreate({
        where: {
          name: genre,
        },
      });
    });
    
    return res.status(200).json(allGenresApi);
  } catch (error) {
    return res.status(401).send(error.message);
  }
}

module.exports = { GET_searchAllGenres };
