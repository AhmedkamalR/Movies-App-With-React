import React, { Suspense ,useState} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import Loader from './components/Loader/Loader';
import { Provider } from "react-redux";
import store from "./store/store";

// const Home = React.lazy(() => import("./components/Home/Home.jsx"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Register = React.lazy(() =>
  import("./components/Register/Register")
);
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));
const Movies = React.lazy(() => import("./pages/Movies"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const Favourite = React.lazy(() => import("./components/Favourites/Favourite"));
export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <div className="App scroll-hide">
     <Provider store={store}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Navbar />
        <div
            className="container mx-auto"
            dir={language === "en" ? "ltr" : "rtl"}
          >
        <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={"/"} exact component={Home} />
          {/* <Route path={"/"} exact component={Search} /> */}
          <Route path="/Movies" exact component={Movies} />
          <Route path="/Movies/:id" exact component={MovieDetails} />
          <Route path="/Favourites" exact component={Favourite} />
          <Route path={"/Login"} exact component={Login} />
          <Route path={"/Register"} exact component={Register} />
          <Route path={"*"} component={NotFound} />
        </Switch>       
        </Suspense>
        </div>
      </BrowserRouter>
      </LanguageContext.Provider>
    </Provider>
    </div>
  );
}

export default App;
