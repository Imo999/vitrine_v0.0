import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import { Project1, Project2, Project3, Project4, Project5 } from './pages/Project';
import Contact from './pages/Contact';


// Import des page dans APP

const App = () => {
  const location = useLocation();
  const history = useHistory()

  //Scroll Effect
  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/"

      // Sroll page home
      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after)
          }, 500)
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before)
          }, 500)
        }
      }
      // Sroll route
      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push('about')
            }, 500)
          }
          break;
        case url + 'about':
          wheelRouter('project-1', '')
          break;
        case url + 'project-1':
          wheelRouter('project-2', 'about')
          break
        case url + 'project-2':
          wheelRouter('project-3', 'project-1')
          break
        case url + 'project-3':
          wheelRouter('project-4', 'project-2')
          break
        case url + 'project-4':
          wheelRouter('project-5', 'project-3')
          break
        case url + 'project-5':
          wheelRouter('contact', 'project-4')
          break
        // Sroll retour contact
        case url + 'contact':
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push('project-5')
            }, 500)
          }
          break
        default: console.log('Error Swith Shroll')
      }
    }

    window.addEventListener('wheel', handleScrollToElement)

  }, [history])

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
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