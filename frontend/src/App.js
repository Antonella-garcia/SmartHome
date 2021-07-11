import './App.css';
import Navigation from './components/Navigation'
import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="navegacion">
        <Navigation />
      </div>

      <Route exact path="/" render={() => (
        <div id="home">
          <div class="landing-text">
            <h1 >SMARTHOME</h1>
            <h3>Bienvenido, escoge una de nuestras opciones</h3>
          </div>
        </div>
      )} />
    </HashRouter>
  );
}


export default App;