const { Router } = require("express");
//const axios = require("axios");
const {GET_searchAllGenres} =require ("./genres_controllers")


const router = Router();

router.get("/", GET_searchAllGenres);



module.exports = router;