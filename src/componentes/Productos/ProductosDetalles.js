import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";



export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const params = useParams();
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  

  let item = 0;

  useEffect(() => {
    productos.forEach((productos) => {
      console.log(productos.id, parseInt(params.id));
      if (productos.id === parseInt(params.id)) {
        setDetalle(productos);
      }
    });
  }, [params.id, productos]);

  return (
    <div className="detalles">
      <h2>{detalle.title}</h2>
      <p className="price">Precio: ${detalle.price}</p>
      <div className="grid">
     
      </div>
      <button onClick={() => addCarrito(detalle.id)}>Añadir al carrito</button>
      <img src={detalle.image} alt={detalle.title} />
    
      <div className="description">
        <p><b>Descripción: </b>{detalle.description}</p>
      </div>

      <div className="characteristic">
        <p><b>Caracteristica: </b>{detalle.characteristic}</p>
      </div>
    </div>
    
  );
};
