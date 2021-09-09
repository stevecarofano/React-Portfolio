import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import About from "./components/pages/About";
import Home from "./components/pages/home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
