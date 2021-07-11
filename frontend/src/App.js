import './App.css';
import Navigation from './components/Navigation'
import Top from './components/Top.js'
import CharMed from './components/CharMed'
import CharConsumo from './components/CharConsumo'
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
      <Route path="/top" exact component={Top} />
      <Route path="/mediciones" exact component={CharMed} />
      <Route path="/consumo" exact component={CharConsumo} />
    </HashRouter>
  );
}


export default App;