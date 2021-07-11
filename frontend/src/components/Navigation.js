import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/top">Top 10 consumo electrodomésticos </Link>
              <Link className="nav-link" to="/mediciones">Gráficas mediciones mayor consumo - refrigeradoras</Link>
              <Link className="nav-link" to="/consumo">Gráficas consumo - cocinas 12, 14 y 38</Link>
            </div>
          </div>
        </div>
      </nav>
     
      </div>
    )
  }
}