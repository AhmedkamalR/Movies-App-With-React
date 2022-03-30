// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory, useLocation, } from "react-router-dom";
// import Movies from '../../pages/Movies';
// import style from './style.css';
// import { Empty, Input, Spin } from 'antd';
// const { Search } = Input;

// const api_key= "b7fcc38e46bc53000e574978b2731a2e";

// const SearchView = props => {
//     const { query } = useParams();
//     const location = useLocation();
//     const history = useHistory();

//     const [ value, setValue ] = useState(query);
//     const [ urlSwitch, setURLSwitch ] = useState(false);

//     const handleSearch = query => {
//         history.push(`/search/${query}`, { prevURL: location.pathname });
//     }

//     useEffect(() => {
//         if (location.state !== undefined && location.pathname !== location.state.prevURL) {
//             setValue(query);
//             setURLSwitch(true);
//         }
//     }, [ location, query ]);

//     const [ loading, setLoading ] = useState(true);
//     const [ movies, setMovies ] = useState([]);
//     useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&include_adult=false`)
//         .then(res => res.json())
//         .then(json => {
//             setMovies(json.results);
//             setLoading(false);
//         })
//     }, [ query ]);
//     return (
//         <div>
//             <div className={style.inputs}>
//                 <div></div>
//                 <Search
//                     enterButton
//                     value={urlSwitch ? query : value}
//                     size="large"
//                     placeholder={"Search movies"}
//                     onClick={() => setURLSwitch(false)}
//                     onChange={e => setValue(e.target.value)}
//                     onSearch={query => handleSearch(query)}
//                     className={style.search}
//                 />
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

// export default SearchView;