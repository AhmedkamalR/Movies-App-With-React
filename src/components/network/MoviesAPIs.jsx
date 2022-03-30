import { axiosInstance } from "./axiosConfig";

export const getMoviesDetails = (id) => {
  return axiosInstance.get("3/movie/popular", {
    params: {
      api_key: 'b7fcc38e46bc53000e574978b2731a2e',
    },
  })
};

export const getMovie = () => {
  return axiosInstance.get(`/Movies`);
};
