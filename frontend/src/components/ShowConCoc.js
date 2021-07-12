//import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'
import axios from "axios";
import { backend } from '../App';
//import { css } from 'jquery';
//import { render } from 'react-dom';
import React, { Component } from 'react'

function extraerLista(List, ListC, ListF){
    for(var i in List){
        ListC.push(List[i].Consumo);
        ListF.push(List[i].Electrodomestico);
    }
}


export default class ShowConCoc extends Component {

    render() {
        var data_dt = {
            labels: this.state.Electrod,
            datasets: [
                {
                    label: 'Registro de las cocinas',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 5,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.state.Consumos
                }
            ]
        };
        return (
            <div>
                <h2>Cocina con menor consumo:</h2><h2>{this.state.Electrod[0]}</h2>
                <Bar
                    data={data_dt}
                    width={200}
                    height={60}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }

    state = { 
        objetos: [],
        Consumo: '',
        Tiempo: '',
        Consumos: [],
        Electrod: []
    }

    async getconsuCocina() {
        const res = await axios.get(backend.host + ':' + backend.port + '/consumococinas')
        this.setState({objetos:res.data});
    }
    async componentDidMount() {
        await this.getconsuCocina();
        extraerLista(this.state.objetos,this.state.Consumos,this.state.Electrod);
        //console.log(this.state.Tiempos);
    }

}  