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
        ListF.push(List[i].Tiempo);
    }
}


export default class ShowConRef extends Component {

    render() {
        var data_dt = {
            labels: (this.state.Tiempos),
            datasets: [
                {
                    label: 'Registro de la refrigeradora',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 5,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.state.Consumos
                }
            ]
        };
        console.log(data_dt);
        return (
            <div>
                <h2>20 registros máximos de la refrigeradora</h2>
                <Bar
                    data={data_dt}
                    width={200}
                    height={80}
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
        Tiempos: []
    }

    async getconsuRefri() {
        const res = await axios.get(backend.host + ':' + backend.port + '/consumorefrigerador')
        this.setState({objetos:res.data});
    }
    async componentDidMount() {
        await this.getconsuRefri();
        extraerLista(this.state.objetos,this.state.Consumos,this.state.Tiempos);
        console.log(this.state.Tiempos);
    }

    
}  