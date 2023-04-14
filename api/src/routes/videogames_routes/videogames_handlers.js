const { Router } = require("express");

const { Videogames, Genres } = require("../../db");
const {
  searchAllVideogames,
  searchVideogame,
  searchVideogameById,
  createvideogame,
} = require("./videogames_controllers");
const { validate } = require("../../utils/utils");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

//GET VIDEOGAMES

const GET_AllVideogames = async (req, res) => {
  const { search } = req.query;
  try {
    const allVideogames = search
      ? await searchVideogame(search)
      : await searchAllVideogames();
    return res.status(200).send(allVideogames);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

//GET VIDEOGAMES BY ID

const GET_VideogamesById = async (req, res) => {
  const id = req.params.idVideogame;
  const source = isNaN(id) ? "bd" : "api";
  try {
    const videogame = await searchVideogameById(id, source);
    console.log("FROM HANDLER:", videogame);
    res.status(200).send(videogame);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

//GET VIDEOGAMES BY NAME

const GET_VideogamesByName = async (req, res) => {
  const search = req.query.search;
  try {
    const filteredVideogames = await searchVideogame(search);
    res.status(200).send(filteredVideogames);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

//POST VIDEOGAMES
const POST_Videogames = async (req, res) => {
  const { name, image, platforms, description, released, rating, genre } =
    req.body;

  try {
    const newVideogame = await createvideogame(
      name,
      image,
      platforms,
      description,
      released,
      rating,
      genre
    );
    console.log("NEW VIDEOGAME:", newVideogame);
    res.status(200).send(newVideogame);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = {
  GET_AllVideogames,
  GET_VideogamesById,
  POST_Videogames,
  GET_VideogamesByName,
};
