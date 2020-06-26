import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./views/Landing.js";
import About from "./views/About.js";
import Discover from "./views/Discover.js";

import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
