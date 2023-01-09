import React, { useContext, useState, useEffect } from "react";
import Logo from "../../images/logo.jpg";
import { Link, Router } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
import data from "../../Data";
import './Header.css'

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;
  const toogleMenu = () => {
    setMenu(!menu);
  };


  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" width="130" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/tiendas">Tiendas</Link>
        </li>
        <li>
          <Link to="/contactanos">Contactanos</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">{carrito.length}</span>
      </div>

    </header>
  );
};
