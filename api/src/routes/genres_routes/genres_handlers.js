
require("dotenv").config();
const { searchGenres, fillGenresDb } = require("./genres_controllers");


//GET ALL GENRES
async function GET_searchAllGenres(req, res) {
  try {
    const allGenresApi = await searchGenres()
    fillGenresDb(allGenresApi);  
    console.log(allGenresApi)    
    return res.status(200).json(allGenresApi);
  } catch (error) {
    return res.status(401).send(error.message);
  }
}

module.exports = { GET_searchAllGenres };