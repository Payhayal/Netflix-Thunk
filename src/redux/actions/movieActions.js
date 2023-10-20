import axios from "axios";
import { options } from "../../utils/constants";
import { actionTypes } from "./actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getMovies = () => (dispatch) => {
  axios.get("/movie/popular", options).then((res) =>
    dispatch({
      type: actionTypes.SET_MOVIES,
      payload: res.data.results,
    })
  );
};

export const getGenres = () => (dispatch) => {
  axios.get("/genre/movie/list", options).
  // for different languages =>>> ex:"/genre/movie/list?language=tr"
  // sends reducer
  then((res) =>
    dispatch({
      type: actionTypes.SET_CATEGORIES,
      payload: res.data.genres,
    })
  );
};
