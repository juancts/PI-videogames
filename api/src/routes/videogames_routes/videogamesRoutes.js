const { Router } = require("express");
//const axios = require("axios");
const {GET_AllVideogames, GET_VideogamesById, POST_Videogames} =require ("./videogames_handlers");



const router = Router();

router.get("/", GET_AllVideogames);
router.get("/:idVideogame", GET_VideogamesById);
router.post("/", POST_Videogames)



module.exports = router;