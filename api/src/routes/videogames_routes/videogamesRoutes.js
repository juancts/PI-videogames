const { Router } = require("express");
//const axios = require("axios");
const {GET_AllVideogames, GET_VideogamesById, POST_Videogames} =require ("./videogames_handlers");
const { validate } = require("../../utils/utils");



const router = Router();

const inputErrors = ( req, res, next)=>{
    const {name, image, platforms, description, released, rating, genre} = req.body;
    validate(name, image, platforms, description, released, rating, genre, req, res, next);
}

router.get("/", GET_AllVideogames);
router.get("/:idVideogame", GET_VideogamesById);
router.post("/", inputErrors, POST_Videogames)



module.exports = router;