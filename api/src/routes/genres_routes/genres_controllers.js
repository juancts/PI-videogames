const axios = require("axios");
require("dotenv").config();
const { Genres } = require("../../db");
const { API_KEY } = process.env;
const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;
//SEARCH ALL GENRES

const searchGenres = async ()=>{
  let allGenresApi = [];
  const getGenres = await axios.get(url).then((res) => res.data.results);
    allGenresApi = await getGenres.map((e, i) => e.name);
    return allGenresApi;    
}

//FULLFILL TABLE GENRES
const fillGenresDb = (genres) =>{
  genres.forEach((genre)=> Genres.findOrCreate({
      where:{
        name: genre,
      }
  }))
}



module.exports = {searchGenres, fillGenresDb}