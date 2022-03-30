// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation, useHistory  } from "react-router-dom";
// import Movies from '../../pages/Movies';
// import style from './style.css';
// import { Empty, Input, Select, Spin } from 'antd';
// const { Search } = Input;

// const api_key= "b7fcc38e46bc53000e574978b2731a2e";

// const Home = props => {
//     const { sort } = useParams();
//     const location = useLocation();
//     const history = useHistory();

//     const [ value, setValue ] = useState(sort ? sort : "popular");

//     const [ loading, setLoading ] = useState(true);
//     const [ movies, setMovies ] = useState([]);
//     useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/movie/${value}?api_key=${api_key}`)
//         .then(res => res.json())
//         .then(json => {
//             setMovies(json.results);
//             setLoading(false);
//         })
//     }, [ value ]);

//     const handleSearch = query => (
//         history.push(`/search/${query}`, { prevURL: location.pathname })
//     )

//     function handleChange(value) {
//         setValue(value);
//         history.push(`/by/${value}`);
//     }

//     return (
//         <div>
//             <div className={style.inputs}>
//                 <div></div>
//                 <Search
//                     enterButton
//                     size="large"
//                     placeholder="Search movies"
//                     onSearch={query => handleSearch(query)}
//                     className={style.search}
//                 />
//                 <Select
//                     value={value}
//                     defaultValue="lucy"
//                     onChange={handleChange}
//                     className={style.select}
//                 >
//                 </Select>
//             </div>
//             {
//                 loading
//                 ? <Spin size="large" tip="Fetching data..." className={style.spin} />
//                 : <Movies movies={movies} />
//             }
//             { movies.length === 0 && !loading ? <Empty /> : "" }
//         </div>
//     )
// }

// export default Home;