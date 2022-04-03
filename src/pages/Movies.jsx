import { useEffect , useState,useContext} from "react";
import { axiosInstance } from "../components/network/axiosConfig";
import MovieCard from "../components/MovieCard/MovieCard";
import {  Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getMoviesList } from "../store/actions/movies";
import { useSelector } from "react-redux";
import { LanguageContext } from "../App";

export default function Movies() {
  const [moviess, setMovies] = useState([]);
  const [page, setpage] = useState(1);
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    dispatch(getMoviesList(language));

  }, [language]);
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
  function changePage(str){
    if(str === "next"){
       setpage((page+1));
    }
    if(str === "previous" && page > 1){
      setpage((page-1))
    }
    
  }

  return (
    <>
      {/* <input className="col-4 md-1 m-2 float-sm-right "  onChange={searching} type="text"></input>
      <button className="btn btn-outline-success " type="submit">
              {language === "en" ? "Search " : " بحث "}
              </button> */}
      <div className="row row-cols-1 row-cols-md-3 g-3 p-4">
        {movies.map((Movie) => {
          return (
            <div className="col mb-4" key={Movie.id}>
              <MovieCard movie={Movie} />
            </div>
          );
        })}
      </div>
      <Container className="d-flex justify-content-around">
       <Button style={{width:"100px"}} onClick={()=>{changePage("previous")}}  variant="danger">previous</Button>
          <Button style={{width:"100px"}} onClick={()=>{changePage("next")}}  variant="primary">Next
          </Button>
      </Container>
    </>
  );
}
