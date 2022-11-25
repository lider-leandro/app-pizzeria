import React from "react";
import fondopromo from "../imagenes/img2/Rectangle 6.png";
import hawaina from "../imagenes/img2/2.png";
import carnivora from "../imagenes/img2/3.jpg";
import vegetariana from "../imagenes/img2/4.jpg";
import mexicana from "../imagenes/img2/5.jpg";
import parrillera from "../imagenes/img2/6.jpg";
import clasica from "../imagenes/img2/1.jpg";
import perfil from "../imagenes/img2/Ellipse 3.png";
import noti from "../imagenes/img2/Notifications none.png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App4 from "../App4";
import Body from "../1componente/Body";
import MontadoMenu from "./MontadoMenu";

function Body2() {
  return (
    <div className="fondobody">
      <div className="fondopromo">
        <img src={fondopromo} height="85px" width="85px" />
        <p className="letrapromo">
          <strong>OBTENER DESCUENTO HASTA 20%</strong>
        </p>
      </div>
      <div className="fondo-pizza">
       <MontadoMenu/>
      </div>
    </div>
  );
}
export default Body2;
