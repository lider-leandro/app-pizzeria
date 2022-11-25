import React from "react";
import fondo2 from "../imagenes/fondo2.jpg";
import fondo1 from "../imagenes/fondo1.png";

function Body() {
  return (
    <div className="contenedor">
      <div className="contenedor2">
        <img className="fondo2" src={fondo2} height="230px" width="270px" />
      </div>
      <div className="contenedor1">
        <img className="fondo1" src={fondo1} height="140px" width="180px" />
      </div>
    </div>
  );
}

export default Body;
