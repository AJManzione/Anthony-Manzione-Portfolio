import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/about/AboutPage';
import Project1Page from './components/projects/Project1Page';
import Project2Page from './components/projects/Project2Page';
import Project3Page from './components/projects/Project3Page';

import './stylesheets/main.css'
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/Anthony-Manzione-Portfolio/" element={<HomePage/>}></Route>
        <Route exact path = "/Anthony-Manzione-Portfolio/about-me" element={<AboutPage/>}></Route>
        <Route exact path = "/Anthony-Manzione-Portfolio/mickey-n-friends-finder/" element={<Project1Page/>}></Route>
        <Route exact path = "/Anthony-Manzione-Portfolio/wish-list/" element={<Project2Page/>}></Route>
        <Route exact path = "/Anthony-Manzione-Portfolio/pokedex-tracker/" element={<Project3Page/>}></Route>
        <Route exact path = "*" element={<HomePage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
