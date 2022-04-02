import { axiosInstance } from "./../../components/network/axiosConfig.jsx";
import { GET_MOVIES_LIST } from "./types";

export const getMoviesList = ( language = "en") => (dispatch) => {
  return axiosInstance
    .get("https://api.themoviedb.org/3/movie/popular?api_key=b7fcc38e46bc53000e574978b2731a2e", {
      params: {
        language,
      },
  })
    .then((res) =>
      dispatch({
        type: GET_MOVIES_LIST,
        payload: res.data.results
      })
    )
    .catch((err) => console.log(err));
};
