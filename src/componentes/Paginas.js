import React, { useContext, useState, useEffect } from "react";
import {Switch, Route} from "react-router-dom";
import { Inicio } from "../Inicio/index.js";
import { Contactanos } from "./Contactanos/Contactanos.js";
import { ProductosLista } from "./Productos/index";
import { ProductosDetalles } from "./Productos/ProductosDetalles.js";
import { Tiendas } from "./Tiendas/Tiendas.js"

 
export const Paginas = () => {


return(
    <section>
      
        <Switch>
            <Route  path="/" exact component={Inicio}/>
            <Route  path="/productos" exact component={ProductosLista}/> 
            <Route  path="/producto/:id" exact component={ProductosDetalles}/>
            <Route  path="/contactanos" exact component={Contactanos}/>
            <Route  path="/tiendas" exact component={Tiendas}/>

        </Switch>
    

    </section>
    
)
}