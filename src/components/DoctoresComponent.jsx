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
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
