import React from "react";
import {Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/Movies";
import Navbar from "./components/common/Navbar";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from './components/NotFound';
import MovieForm from './components/MovieForm';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";


function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Switch>
        {/* <Route path="/movies/new/:id" component={NewMovieForm} /> */}
        <Route path="/movie/:id" component={MovieForm} />
        <Route path="/movie/new" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
