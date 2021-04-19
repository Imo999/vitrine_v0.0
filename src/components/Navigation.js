import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" exact className="hover" activeClassName="nav-active">
          <li>About</li>
        </NavLink>
        <NavLink to="/experience" exact className="hover" activeClassName="nav-active">
          <li>Experience</li>
        </NavLink>
        <li className="nav-portfolio">Project
          <ul className="nav-projects">
            <NavLink to="/project-1" activeClassName="nav-active" className="hover">
              <li>Portfolio Imo999</li>
            </NavLink>
            <NavLink to="/project-2" activeClassName="nav-active" className="hover">
              <li>prog-check-load_v0.0</li>
            </NavLink>
            <NavLink to="/project-3" activeClassName="nav-active" className="hover">
              <li>Project 3</li>
            </NavLink>
            <NavLink to="/project-4" activeClassName="nav-active" className="hover">
              <li>Project 4</li>
            </NavLink>
            <NavLink to="/project-5" activeClassName="nav-active" className="hover">
              <li>Project 5</li>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
