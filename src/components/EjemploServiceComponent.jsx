import React, { Component } from 'react'
import ServiceEjemplo from '../services/ServiceEjemplo'

export default class EjemploServiceComponent extends Component {
    //para usar el servicio necesito un objeto de la clase ServiceEjemplo
    service = new ServiceEjemplo()

    loadData = () => {
        this.setState({
            mensaje1: this.service.getSauldo(),
            mensaje2: this.service.getDia("Juan"),
            comics: this.service.getComics()
        })
    }
    state = {
        mensaje1: "",
        mensaje2: "",
        comics: []
    }
    componentDidMount = () => {
        this.loadData();
    }
    render() {
        return (
        <div>
            <h1>Ejemplo de servicio</h1>
            <h3 style={{color:"blue"}}>{this.state.mensaje1}</h3>
            <h3 style={{color:"green"}}>{this.state.mensaje2}</h3>
            <h3 style={{color:"green"}}>{this.state.comics.length} </h3>
            {
                this.state.comics.map((comic,index) => {
                    return(
                        <div key={index}>
                            <h2>{comic.titulo}</h2>
                            <img src={comic.imagen} width="120px" height="150px"/>
                        </div>
                    )
                })
            }
            
        </div>
        )
    }
}