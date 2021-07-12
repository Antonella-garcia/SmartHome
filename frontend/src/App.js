import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Show from './components/ShowRegistros';
import ShowCR from './components/ShowConRef';
import ShowCC from './components/ShowConCoc';
//import BarChart from './components/ShowConRef';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
     <Navigation/>
     <Route exact path="/" render={() => (
        <div id="home">
          <div class="landing-text">
          <h1 >SMARTHOME</h1>
          <h3>Bienvenido, escoge una de nuestras opciones</h3>
        </div>
      </div>)}/>
     <Route path="/top10" exact component={Show} />
     <Route path="/consumorefrigerador" exact component={ShowCR} />
     <Route path="/consucocina" exact component={ShowCC}/>
    </Router>
  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
}


export default App;
