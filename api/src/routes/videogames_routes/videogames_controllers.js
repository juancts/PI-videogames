const axios = require("axios");
require("dotenv").config();
const { Videogames, Genres } = require("../../db");
const { cleanData, validate } = require("../../utils/utils");
const { API_KEY } = process.env;

//SEARCH ALL VIDEOGAMES
const searchAllVideogames = async () => {
  let allVideogames = [];
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  let allVideogamesApi = [];

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
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return (allVideogames = [...allVideogamesApi, ...videogamesDb]);
};
//SEARCH VIDEOGAMES BY ID

const searchVideogameById = async (id, source) => {
  console.log("ID", id);
  const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;

  const videogame =
    source === "api"
      ? await axios(url).then((res) => cleanData(res))
      : await Videogames.findByPk(id);

  console.log(videogame);
  return videogame;
};

//SEARCH VIDEOGAMES  BY NAMES

const searchVideogame = async (search) => {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  let filteredVideogames = [];
  if (search) {
    console.log("SEARCH VIDEOGAME WITH THIS WORD:", search);

    const videogames = await axios(url).then((res) => res.data.results);
    filteredVideogames = cleanData(
      videogames.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    if (filteredVideogames.length === 0) {
      filteredVideogames = await Videogames.findAll({
        where: {
          name: search,
        },
        include: {
          model: Genres,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      console.log(filteredVideogames);
    }
    return filteredVideogames;
  }
};
//CREATE VIDEOGAMES
const createvideogame = async (
  name,
  image,
  platforms,
  description,
  released,
  rating,
  genre
) => {
   const newVideogame = await Videogames.create({
    name,
    image,
    platforms,
    description,
    released,
    rating,
    genre,
  });
  await Genres.findAll({
    where: {
      name: genre,
    },
  }).then((res) => newVideogame.addGenre(res));
  await Genres.findAll({
    where: {
      name: genre,
    },
  }).then((res) => newVideogame.addGenre(res));
  return newVideogame;
};

//EXPORTS
module.exports = {
  searchAllVideogames,
  searchVideogame,
  searchVideogameById,
  createvideogame,
};
