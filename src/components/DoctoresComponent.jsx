import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DoctoresComponent extends Component {
    url = Global.urlApiDoctores;

    state = {
        doctores: []
    }

    loadDoctoresHospital = () => {
        let request = "api/Doctores/DoctoresHospital/" + this.props.idhospital;
        axios.get(this.url + request).then((response) => {
            console.log('loading doctores');
            this.setState({ 
                doctores: response.data 
            })
        })
    }
    DetallesDoctor = (event) => {
        event.preventDefault();
        // Lógica para mostrar detalles del doctor
        console.log('funcionando');
    }

    componentDidMount = () => {
        this.loadDoctoresHospital();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital !== this.props.idhospital) {
            this.loadDoctoresHospital();
        }
    }

    render() {
        return (
            <div>
                <h1>Doctores </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Apellido</th> 
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                            <th>Detalles</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.doctores.map((doctor) => {
                            return (
                                <tr>
                                    <td>{doctor.apellido}</td>
                                    <td>{doctor.especialidad}</td>
                                    <td>{doctor.salario}</td>
                                    <td>{doctor.idHospital}</td>
                                    <td><button className="btn btn-danger" onClick={this.DetallesDoctor}>Detalles Doctor</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <h3>Detalles del Doctor</h3>
                
            </div>
        )
    }
}
