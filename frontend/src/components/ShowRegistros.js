import React, { Component } from 'react';
import axios from "axios";
import {backend} from '../App';
import './stile.css';

export default class ShowRegistros extends Component {
    render() {
        return (
            <div className="row">
                <div className="row mx-3">
                    <div className="col-md-8">
                        <ul className="list-group">
                        <table class="table">
                        <caption>Top 10 Electrodomésticos que consumen gran cantidad de energía</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Electrodoméstico</th>
                                        <th scope="col">Consumo promedio [kW]</th>
                                    </tr>
                                </thead>
                                <tbody>{this.state.objetos.map(function (item, key) {

                                    return (
                                        <tr key={key}>
                                            <td>{item.Puesto}</td>
                                            <td>{item.Electrodomestico}</td>
                                            <td>{item.Consumo}</td>
                                        </tr>
                                    )

                                })}</tbody>
                            </table>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }

    state = {
        objetos: [],
        Puesto:'',
        Electrodomestico:'',
        Consumo:''
    }
    async getTop10() {
        const res = await axios.get(backend.host + ':' + backend.port + '/top10');
        this.setState({objetos:res.data});
    }
    async componentDidMount() {
        await this.getTop10();
        console.log(this.state.objetos);
    }
    
}
