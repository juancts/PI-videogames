import { GET_GENRES, GET_VIDEOGAME, GET_VIDEOGAMES } from "./actionTypes";

const initialState = {
  videogames: [],
  genres: [],
  filteredvideogames: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
      };
    case GET_VIDEOGAME:
      return {
        ...state,
        filteredvideogames: payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
