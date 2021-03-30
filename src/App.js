import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails"


function App() {

  return (
    <div className="App bg-background bg-back-dark">
      <Router>
        <Switch>
          <Route exact path="/:page" >
            <Home />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonDetails />
          </Route>
          <Route exact path="/">
            <Redirect to="/1" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
