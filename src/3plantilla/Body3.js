import React from "react";
import start from "../imagenes/img3/start.png";
import fuego from "../imagenes/img3/fuego.png";
import alarma from "../imagenes/img3/alarm.png";
import ConterCard from "../3plantilla/ConterCard";
import DatosBody3 from "./DatosBody3";


function Body3() {
  return (
    <div className="fondo">
      <DatosBody3/>
      <ConterCard />
      <div className="tamanos">
        <button className="botontama">S</button>
        <button className="botontama">M</button>
        <button className="botontama">L</button>
        <button className="botontama">XL</button>
        <button className="botontama">XXL</button>
      </div>
      <div className="fondotiempo">
        <img src={start} className="letratiempo" height="37px" width="38px" />
        <p>4.5</p>
        <img src={fuego} className="letratiempo" height="37px" width="30px" />
        <p>150 KCAL</p>
        <img src={alarma} className="letratiempo" height="42px" width="40px" />
        <p>25 min</p>
      </div>
    </div>
  );
};

export default Body3;
