import { useEffect, useState } from "react";
import { axiosInstance } from "../components/network/axiosConfig";
import MovieCard from "../components/MovieCard/MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("3/movie/popular", {
        params: {
          api_key: "b7fcc38e46bc53000e574978b2731a2e",
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  const searching = (e) => {
    console.log("is searching");
    axiosInstance
      .get("3/search/movie", {
        params: {
          api_key: "b7fcc38e46bc53000e574978b2731a2e",
          query: e.target.value,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input className="col-4 md-3" onChange={searching} type="text"></input>
      <li className="page-item"></li>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        {movies.map((Movie) => {
          return (
            <div className="col mb-4" key={Movie.id}>
              <MovieCard movie={Movie} />
            </div>
          );
        })}
      </div>
    </>
  );
}
