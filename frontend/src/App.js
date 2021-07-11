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
       <div id="img-home">
         <img src="/Images/home.png" alt="home"/>
       </div>
      

      )} />
    </HashRouter>
  );
}


export default App;