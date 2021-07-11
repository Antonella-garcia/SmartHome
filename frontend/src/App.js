import './App.css';
import Navigation from './components/Navigation'
import React from 'react'
import {Route, HashRouter}  from 'react-router-dom'

function App() {
    return (
      <HashRouter>
       <Navigation/>
       <Route exact path="/" render={()=>(<div>Lista de Profesores</div>)}/>
      </HashRouter>
    );
  }


export default App;