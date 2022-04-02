import React, { useState,useEffect,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../App";
import axios from "axios";
export default function MovieDetails() {
  const [MovieDetails, setMovieDetails] = useState({});
  const { language } = useContext(LanguageContext);
  const params = useParams();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}popular?api_key=b7fcc38e46bc53000e574978b2731a2e`)
    .then((res) =>{setMovieDetails(res.data)
  console.log(res.data)})
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="card mb-3 p-4">{language === "en" ? "Movie Details" : "تفاصيل عن الفيلم"}</h3>
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
              <h5 className="card-title"> {language === "en" ? "Name" : "الاسم"}: {MovieDetails.title}</h5>
              <p className="">{language === "en" ? "over View" : "قصة الفيلم"} : {MovieDetails.overview}</p>
              <p className="card-text">{language === "en" ? "Rate" : "تقييم"}: {MovieDetails.vote_average} </p>          
              <p className="card-text" >{language === "en" ? "popularity" : "المشاهدات"}: {MovieDetails.popularity} 
              <FontAwesomeIcon icon={["eye", "eye"]} size="lg" />      
              </p>        
              <p className="card-text">
                <small className="text-muted">{language === "en" ? "Release date" : "تاريخ الاصدار"}: {MovieDetails.release_date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}