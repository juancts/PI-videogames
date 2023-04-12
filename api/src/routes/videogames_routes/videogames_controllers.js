const axios = require("axios");
require("dotenv").config();
const { Videogames, Genres } = require("../../db");
const { API_KEY } = process.env;


//SEARCH ALL VIDEOGAMES
const searchAllVideogames = async (search) => {
  let allVideogames = [];
  if(search){searchVideogame(search)}else{ 
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  let allVideogamesApi = [];
  
    const videogamesApi = await axios(url).then((res) => {
      return res.data.results;
    })
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
   return allVideogames = [...allVideogamesApi, ...videogamesDb]
}}
//SEARCH VIDEOGAMES BY ID

const searchVideogameById = async (id) =>{
  console.log("ID", id);
  const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
  
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
  return videogame; 
}




//SEARCH VIDEOGAMES  BY NAMES

const searchVideogame = async (search) => {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  if (search) {
    console.log("SEARCH ALL VIDEOGAMES:", search);
    let filteredVideogames = [];
        const videogames = await axios(url).then((res) => res.data.results)    
         filteredVideogames = videogames.filter((e)=> e.name.toLowerCase().includes(search.toLowerCase()));
         
         filteredVideogames = filteredVideogames.map((e, index)=>{
            return {
                index: index,
                image: e.background_image,
                name: e.name,
                genre: e.genres.map((el) => el.name),
              };
            })
            console.log("FILTERED VIDEOGAMES:", filteredVideogames)
            return filteredVideogames;    
}
}
//CREATE VIDEOGAMES
const createvideogame = async ( name, image, platforms, description, released, rating, genre ) =>{
 const newVideogame = await Videogames.create({ name, image, platforms, description, released, rating, genre });
      await Genres.findAll({
        where:{
          name : genre,
        },
      }).then((res) => newVideogame.addGenre(res));
    await Genres.findAll({
      where:{
        name : genre,
      },
    }).then((res) => newVideogame.addGenre(res));
}



//EXPORTS
module.exports = {searchAllVideogames, searchVideogame, searchVideogameById, createvideogame}