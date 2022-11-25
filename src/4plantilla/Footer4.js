import React from 'react'
import uno from "../imagenes/img3/1.1.png";
import dos from "../imagenes/img3/1.2.png";
import tres from "../imagenes/img3/1.3.png";
import cuatro from "../imagenes/img3/1.4.png";


function Footer4() {
  return (
    <div className="fondofot">
    <p>Ingredientes</p>
    <div className="fondoingredientes">
      <button className="ingredientesboton">
        <img src={uno} />
      </button>
      <button className="ingredientesboton">
        <img src={dos} />
      </button>
      <button className="ingredientesboton">
        <img src={tres} />
      </button>
      <button className="ingredientesboton">
        <img src={cuatro} />
      </button>
    </div>
    <div className="fondobotonpedido">
      <button className="botonpedido" >AÑADIR</button>
      <button className="botonpedido" >PEDIR</button>
    </div>
  </div>
  )
}

export default Footer4