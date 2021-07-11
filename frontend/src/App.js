import './App.css';
import Navigation from './components/Navigation'
import React from 'react'
import home from './Images/home.png' ;
import { Route, HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="navegacion">
        <Navigation />
      </div>

      <Route exact path="/" render={() => (
        <img src={home} className="img-thumbnail" alt="Home" />


      )} />
    </HashRouter>
  );
}


export default App;