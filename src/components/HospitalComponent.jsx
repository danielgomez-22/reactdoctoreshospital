import React, { Component } from 'react'
import DoctoresComponent from './DoctoresComponent'


export default class HospitalComponent extends Component {
  state = {
    doctorSeleccionado: null
  }

  seleccionarDoctor = (doctor) => {
    this.setState({ doctorSeleccionado: doctor })
  }

  render() {
    const { doctorSeleccionado } = this.state

    return (
      <div>
        <h1>Doctores del Hospital {this.props.idhospital}</h1>
        <DoctoresComponent
          idhospital={this.props.idhospital}
          onDoctorSelect={this.seleccionarDoctor}
        />

        {doctorSeleccionado && (
          <div className="mt-4">
            <h3>Detalles del Doctor</h3>
            <p><strong>Apellido:</strong> {doctorSeleccionado.apellido}</p>
            <p><strong>Especialidad:</strong> {doctorSeleccionado.especialidad}</p>
            <p><strong>Salario:</strong> {doctorSeleccionado.salario}</p>
            <p><strong>Hospital:</strong> {doctorSeleccionado.idHospital}</p>
          </div>
        )}
      </div>
    )
  }
}
