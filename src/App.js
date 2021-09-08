import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Header from "./components/header";
import MainPage from "./components/mainPage";
import About from "./components/pages/About"

function App() {
  return (
    <>
      <Router>
        <Header />
        <MainPage />
        <Switch>
          <Route path='/About' exact component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
