import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from './components/Loader/Loader';

const Login = React.lazy(() => import("./components/Login/Login"));
const Register = React.lazy(() =>
  import("./components/Register/Register")
);
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));
const Movies = React.lazy(() => import("./pages/Movies"));
const MovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const Favourite = React.lazy(() => import("./components/Favourites/Favourite"));

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={"/"} exact component={Login} />
          {/* <Route path={"/"} exact component={Search} /> */}
          <Route path="/Movies" exact component={Movies} />
          <Route path="/Movies/:id" exact component={MovieDetails} />
          <Route path="/Favourites" exact component={Favourite} />
          <Route path={"/Login"} exact component={Login} />
          <Route path={"/Register"} exact component={Register} />
          <Route path={"*"} component={NotFound} />
        </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
