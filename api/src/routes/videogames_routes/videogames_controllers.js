const { Router } = require("express");
const axios = require("axios");
const { search } = require("./videogamesRoutes");
require("dotenv").config();
const { Videogames, Genres } = require("../../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { API_KEY } = process.env;

const router = Router();



//GET VIDEOGAMES ROUTE

const GET_AllVideogames = async (req, res) => {
  const search = req.query.search;
  let allVideogames = [];
  if (search) {
    console.log("SEARCH ALL VIDEOGAMES:", search);
    GET_VideogamesByName(req, res);
  }else{
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  let allVideogamesApi = [];
  try {
    const videogamesApi = await axios(url).then((res) => {
      return res.data.results;
    });
    allVideogamesApi = videogamesApi.map((e, index) => {
      return {
        index: index,
        image: e.background_image,
        name: e.name,
        genre: e.genres.map((el) => el.name),
      };
    });
    const videogamesDb = await Videogames.findAll({
      include:{
        model: Genres,
        through:{
          attributes:[],
        }
      }
    })
    allVideogames = [...allVideogamesApi, ...videogamesDb]
    return res.status(200).send(allVideogames);
  } catch (error) {
    return res.status(401).send(error.message);
  }
}
};

//GET VIDEOGAMES BY ID

const GET_VideogamesById = async (req, res) => {
  const id = req.params.idVideogame;
  console.log("ID", id);
  const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
  if (id) {
    try {
      const videogame = await axios(url).then((res) => {
        return {
          id: res.data.id,
          name: res.data.name,
          image: res.data.background_image,
          plataforms: res.data.parent_platforms.map((e) => e.platform.name),
          description: res.data.description,
          released: res.data.released,
          rating: res.data.rating,
          genres: res.data.genres.map((e) => e.name),
        };
      });

      return res.status(200).send(videogame);
    } catch (error) {
      return res.status(401).send(error.message);
    }
  }
};

//GET VIDEOGAMES BY NAME

const GET_VideogamesByName = async (req, res) => {
  const search = req.query.search;
  let filteredVideogames = [];

  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
    try {
        const videogames = await axios(url)
        .then((res) => res.data.results)    
         filteredVideogames = videogames.filter((e)=> e.name.toLowerCase().includes(search.toLowerCase()));
         console.log("FILTERED VIDEOGAMES:", filteredVideogames)
         filteredVideogames = filteredVideogames.map((e, index)=>{
            return {
                index: index,
                image: e.background_image,
                name: e.name,
                genre: e.genres.map((el) => el.name),
              };
            })
          res.status(200).send(filteredVideogames)
        
    } catch (error) {
        res.status(401).send(error.message)
    }
  };

//POST VIDEOGAMES
const POST_Videogames = async(req, res) => {
  const {name, image, platforms, description, released, rating, genre} = req.body;
  console.log(name, image, platforms, description, released, rating, genre);
  try {
    const newVideogame = await Videogames.create({
      name, image, platforms, description, released, rating, genre
    });
    await Genres.findAll({
      where:{
        name : genre,
      },
    }).then((res) => newVideogame.addGenre(res));
    res.status(200).send(newVideogame);
  } catch (error) {
    console.error("Error in create pokemon", error.message);
  }
}



module.exports = {
  GET_AllVideogames,
  GET_VideogamesById,
  POST_Videogames,
  };
