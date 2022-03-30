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

  return (
    <>
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
