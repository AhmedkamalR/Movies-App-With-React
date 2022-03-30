import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieCard({ movie }) {
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
