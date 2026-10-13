import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import DoctoresComponent from './DoctoresComponent'
import { useParams } from 'react-router-dom';


export default class Router extends Component {
  render() {
    function DoctoresElement() {
        let {idhospital} = useParams();
        return <DoctoresComponent idhospital={idhospital} />;
    }

    return (
      <BrowserRouter>
      <MenuComponent />
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/doctores/:idhospital" element={<DoctoresElement />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
