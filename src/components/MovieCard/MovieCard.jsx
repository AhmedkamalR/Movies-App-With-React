import React, { useState } from "react";
import "../MovieCard/style.css";
import { Link } from "react-router-dom";
import { addToFavourites } from "../../store/actions/action";
import { deletefromFavourites } from "../../store/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function MovieCard({ movie }) {
 const favourites = useSelector((state) => state.favourites);

  const [fav, setFav] = useState(movie.favourite);
  const dispatch = useDispatch();

  const isFave = (movieId) => {
    if (!favourites) return;

    return favourites.find((movie) => movie.id == movieId);
  };

  const addToFav = () => {
    setFav(true);
    dispatch(addToFavourites(movie));
  };

  const removeFromFav = (movieId) => {
    setFav(false);
    dispatch(deletefromFavourites(movieId));
  };
  return (
    <div className="card h-20 ">
      <img
        src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="card-img-top"
        height={300}
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">Name: {movie.original_title} </h5>
        {!isFave(movie.id) ? (
          <FontAwesomeIcon
            style={{
              color: "gray",
              position: "absolute",
              top: "5",
              left: "83%",
            }}
            onClick={addToFav}
            icon={faHeart}
            size="3x"
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            style={{
              color: "gold",
              position: "absolute",
              top: "5",
              left: "83%",
            }}
            onClick={() => {
              removeFromFav(movie.id);
            }}
            icon={faHeart}
            size="3x"
          ></FontAwesomeIcon>
        )}
        <p className="card-text">Rating : {movie.vote_average} </p>
        <p className="card-text">Voters : {movie.vote_count} </p>
        <p className="card-text">
          popularity : {movie.popularity}
          <FontAwesomeIcon icon={["eye", "eye"]} size="lg" />
        </p>
        <p className="card-text">date Release : {movie.release_date} </p>
        <Link
          to={{
            pathname: `/movies/${movie.id}`,
            state: movie,
          }}
          className="btn btn-primary"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
