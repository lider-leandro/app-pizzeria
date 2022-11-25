import React from "react";
import {datos} from '../2plantilla/datosPizza';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const MontadoMenu = () => {
  return (
    <div>
        {
            datos.map(datos=>(
    <button className="row" key={datos.id}>         
         <Link to= {`/pedido/${datos.id}`} >
                <img src={datos.img} height="100px" />
          </Link>
            <p>{datos.title}</p>       
    </button>
        ))
        }
    </div>
  );
};

export default MontadoMenu;
