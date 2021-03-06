import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function Favourite() {
    const movies = useSelector((state)=>state.favourites)

  return (
    <>
    <div className="row row-cols-1 row-cols-md-4 g-3 py-2 m-0">
      {movies.map((movie) => {
        return (
          <div className="col mb-4" key={movie.id}>
            < MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  </>
  )
}
