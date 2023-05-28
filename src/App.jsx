import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';

import './stylesheets/main.css'
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/Anthony-Manzione-Portfolio/" element={<HomePage/>}></Route>
        <Route exact path = "/Anthony-Manzione-Portfolio/mickey-n-friends-finder/" element={<Project1/>}></Route>
        <Route exact path = "/Anthony-Manzione-Portfolio/wish-list/" element={<Project2/>}></Route>
        <Route exact path = "/Anthony-Manzione-Portfolio/pokedex-tracker/" element={<Project3/>}></Route>
        <Route exact path = "*" element={<HomePage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
