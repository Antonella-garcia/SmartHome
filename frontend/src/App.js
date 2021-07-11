import './App.css';
import Navigation from './components/Navigation'
import React from 'react'
import home from './Images/home.png';
import { Route, HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="navegacion">
        <Navigation />
      </div>

      <Route exact path="/" render={() => (
        <div id="home">
          <div classname="landing-text"  display="table-cell" text-align="center" vertical-align="middle" padding="80px 0">
            <h1  font-size="500%" font-weight="700" display="table-cell" text-align="center" vertical-align="middle" padding="80px 0">SMARTHOME</h1>
            <h3 display="table-cell" text-align="center" vertical-align="middle" padding="80px 0">Bienvenido, escoge una de nuestras opciones</h3>
          </div>
          <div className="img-home">
            <img src={home} className="rounded mx-auto d-block" alt="Home" width="100%" display="table" height="100%" position="center" background-size="cover" />
          </div>
        </div>
      )} />
    </HashRouter>
  );
}


export default App;