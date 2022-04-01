import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function MovieDetails() {
  const [MovieDetails, setMovieDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}popular?api_key=b7fcc38e46bc53000e574978b2731a2e`)
    .then((res) =>{setMovieDetails(res.data)
  console.log(res.data)})
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="card mb-3 p-4">Movie Details</h3>
      <div className="card mb-3 p-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src=
              {`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`}
              className="img-fluid rounded-start"
              alt={MovieDetails.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name: {MovieDetails.title}</h5>
              <p className="card-text">Description: {MovieDetails.overview} </p>
              <p className="card-text">Rate:  {MovieDetails.vote_average} </p>          
              <p className="card-text" >Popularity : {MovieDetails.popularity}   
              <FontAwesomeIcon icon={["eye", "eye"]} size="lg" />      
              </p>        
              <p className="card-text">
                <small className="text-muted">Date Release : {MovieDetails.release_date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}