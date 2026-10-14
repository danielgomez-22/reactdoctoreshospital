import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales {

    insertHospital(hospital) {
        return new Promise(function(resolve) {
            let url = Global.urlApiHospitales;
            let request = "api/hospitales";
            axios.post(url + request, hospital).then((response) => {
                console.log('insertando hospital');
                resolve(response.data);
            })
        })
    }

    getHospitales() { 
        return new Promise(function(resolve) {
            let url = Global.urlApiHospitales;
            let request = "api/hospitales";
            axios.get(url + request).then((response)=> {
                console.log('leyendo hospitales');
                resolve(response.data); 
            })
        })
    }

    getDoctoresHospital(idhospital) {
        return new Promise(function(resolve) {
            let url = Global.urlApiDoctores;
            let request = "api/doctores/doctoreshospital/" + idhospital;
            axios.get(url + request).then((response) => {
                console.log('leyendo doctores del hospital ' + idhospital);
                resolve(response.data);
            })

        })
    }

}
