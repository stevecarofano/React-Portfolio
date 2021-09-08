import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Header from "./components/header";
import About from "./components/pages/About"
import Home from "./components/pages/home"

function App() {
  return (
    <>
      <Router basename='reactportfolio'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
