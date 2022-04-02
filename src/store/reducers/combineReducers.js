import { combineReducers } from "redux";
import reducer from "../reducers/reducer";
import { loaderReducer } from "./loader";
import { moviesReducer } from "./movies";
export default combineReducers({
    favourites: reducer,
    movies: moviesReducer,
    isLoading: loaderReducer,
  });
  