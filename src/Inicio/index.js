import React from "react";
import { Link } from "react-router-dom";
import './Inicio.css';
import Portada1 from "../images/banner1.jpg"
import Portada2 from "../images/banner1.jpg"
import Portada3 from "../images/banner1.jpg"

export const Inicio =() => {
    return(
        <div className="inicio">
            <Link to="/">
                <h1>Inicio</h1>
            </Link>
            <Link to="/productos">
                <h1>Productos</h1>
            </Link>
            <Link to="/contactanos">
                <h1>Contactanos</h1>
            </Link>
            <Link to="/tiendas">
                <h1>Tiendas</h1>
            </Link>
            
            <img src={Portada1} alt="Inicio"></img>
            

        </div>
    )
}

