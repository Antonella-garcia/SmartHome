//import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'
import axios from "axios";
import { backend } from '../App';
//import { css } from 'jquery';
//import { render } from 'react-dom';
import React, { Component } from 'react'



export default class ShowConRef extends Component {
    //var setBarData;
    //const [Consumos, setConsumos] = useState([]);
    //const [Tiempo, setTiempos] = useState([]);

    render() {
        return (
            <div>
                <h2>Las 20 refrigeradoras con mayor consumo</h2>
                <Bar
                    data={this.data}
                    width={100}
                    height={50}
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
        Tiempo: ''
    }
    async getconsuRefri() {
        const res = await axios.get(backend.host + ':' + backend.port + '/consumorefrigerador')
        this.setState({objetos:res.data});
    }
    async componentDidMount() {
        await this.getconsuRefri();
        console.log(this.state.objetos);
    }
//grafico de barras
    data = {
        labels: this.state.Tiempo,
        datasets: [
            {
                label: 'Refrigeradoras',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 10,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: this.state.objetos.map(function (item, key)
                {
                    return item.Consumo;
                }),
            }
        ]
    };


}  