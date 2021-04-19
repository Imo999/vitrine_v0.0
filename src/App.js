import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience'
import { Project1, Project2, Project3, Project4, Project5 } from './pages/Project';
import Contact from './pages/Contact';


// Import des page dans APP

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Experience" component={Experience} />
        <Route exact path="/Project-1" component={Project1} />
        <Route exact path="/Project-2" component={Project2} />
        <Route exact path="/Project-3" component={Project3} />
        <Route exact path="/Project-4" component={Project4} />
        <Route exact path="/Project-5" component={Project5} />
        <Route exact path="/Contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;