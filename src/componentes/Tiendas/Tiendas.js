import React from "react";
import "./Tiendas.css";
import Portada1 from "../../images/banner1.jpg";

export const Tiendas = () => {
  return (
    <div className="tiendas">
      <h1>Tiendas</h1>
      <h1>Bogota</h1>

      <div className="card">
        <h2>
          <box-icon name="store-alt"></box-icon> Tienda Avenida 68
        </h2>
        <p1> Av Cr 68 No. 72 - 43</p1>
        <br></br>
        <p1> Horarios</p1>
        <br></br>
        <p1> Lun a Vie </p1>
        <br></br>
        <p1> 7:00 a.m a 9:00 p.m</p1>

      </div>

      <div className="card">
        <h2>
          <box-icon name="store-alt"></box-icon>Tienda Calle 170
        </h2>
        <p1> Cr 69 No. 170 - 15</p1>
        <br></br>
        <p1> Horarios</p1>
        <br></br>
        <p1> Lun a Vie </p1>
        <br></br>
        <p1> 7:00 a.m a 9:00 p.m</p1>
      </div>

      <div className="card">
        <h2>
          <box-icon name="store-alt"></box-icon>Tienda Carrera 30
        </h2>
        <p1> Cr 30 No. 10 - 25</p1>
        <br></br>
        <p1> Horarios</p1>
        <br></br>
        <p1> Lun a Vie </p1>
        <br></br>
        <p1> 7:00 a.m a 9:00 p.m</p1>
      </div>

      <div className="card">
        <h2>
          <box-icon name="store-alt"></box-icon> Tienda El Edén
        </h2>
        <p1> Av Boyacá No. 15 - 98, Lc 1 -102 y 2 – 116</p1>
        <br></br>
        <p1> Horarios</p1>
        <br></br>
        <p1> Lun a Vie </p1>
        <br></br>
        <p1> 7:00 a.m a 9:00 p.m</p1>
      </div>
    </div>
  );
};
