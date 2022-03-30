import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetails } from "../components/network/MoviesAPIs";
export default function MovieDetails(props) {
  console.log(props);
  const [MovieDetails, setMoviesDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    getMoviesDetails(params)
      .then((res) => setMoviesDetails(res.data.results))
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
              {`https://image.tmdb.org/t/p/w500/${props.location.state.poster_path}`}
              className="img-fluid rounded-start"
              alt={MovieDetails.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name: {props.location.state.title}</h5>
              <p className="card-text">Description: {props.location.state.overview} </p>
              <p className="card-text">Vote:  {props.location.state.vote_average} </p>          
              <p className="card-text" >Popularity : {props.location.state.popularity}   
              <FontAwesomeIcon icon={["eye", "eye"]} size="lg" />      
              </p>        
              <p className="card-text">
                <small className="text-muted">date Release : {props.location.state.release_date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
