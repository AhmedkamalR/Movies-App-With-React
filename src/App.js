import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
// import Home from './components/Home/Home';
// import Search from './components/search/Search.jsx';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={"/"} exact component={Login} />
          {/* <Route path={"/"} exact component={Search} /> */}
          <Route path="/Movies" exact component={Movies} />
          <Route path="/Movies/:id" exact component={MovieDetails} />
          <Route path={"/Login"} exact component={Login} />
          <Route path={"/Register"} exact component={Register} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
