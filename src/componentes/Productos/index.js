import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/Dataprovider.js";
import { ProductoItem } from "./ProductoItem.js";
import './Productos.css';

export const ProductosLista = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  console.log(productos);


  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e.target.value)
  };
  
  if (searchInput.length > 0) {
    productos.filter((producto) => {
      return producto.title.match(searchInput);
    });
  }

  //const [search, setSearch] = useState("");
  // console.log(productos);
  // const handleChange = (e) => {
  //  setSearch(e.target.value);
  //   console.log(e);
  // };

  return (
    <>
      <h1 className="tittle">Productos</h1>
      <div>
        <input
          value={searchInput}
          onChange={handleChange}
          type="text"
          placeholder="Buscar producto"
          className="form-control"
        />
        
        <div className="productos">
        {productos &&
          productos.map((producto) => (
            <ProductoItem
              key={producto.id}
              title={producto.title}
              image={producto.image}
              category={producto.category}
              price={producto.price}
              id={producto.id}
            />
          ))}
      </div>
      </div>


  
    </>
  );
};
