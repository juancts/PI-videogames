import { GET_VIDEOGAMES, GET_VIDEOGAME, GET_GENRES } from "./actionTypes";

export const getVideoGames = () => {
  return async (dispatch) => {
       const apiData = await fetch("http://localhost:3001/videogames")
      .then((res) => res.json())
      .then((data) => data);
    console.log("ALL VIDEOGAMES:", apiData);
    dispatch({ type: GET_VIDEOGAMES, payload: apiData });
  };
};

export const getVideogame = (id) => {
  return async (dispatch) => {
    const apiData = await fetch("http://localhost:3001/videogames/${id}")
      .then((res) => res.json())
      .then((data) => data);
    console.log("VIDEOGAMES:", apiData);
    const videogame = apiData;
    dispatch({ type: GET_VIDEOGAME, payload: videogame });
  };
};

//GET ALL GENRES AND PUT THEM AS INITIAL STATE AND BD.
export const getGenres = () => {
  return async (dispatch) => {
    const apiGenres = await fetch("http://localhost:3001/genres")
      .then((res) => res.json())
      .then((data) => data);
      console.log("VIDEOGAMES:", apiGenres);
    dispatch({ type: GET_GENRES, payload: apiGenres });
  };
};
