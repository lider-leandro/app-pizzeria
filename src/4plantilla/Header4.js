import React from 'react'
import boton1 from "../imagenes/img3/Left.png";
import Heart from '../imagenes/img3/Heart.png'
import { Link } from 'react-router-dom';


function Header4() {
  return (
    <div className="fondobotones">
      <button className="boton">
        <Link to="/atras" ><img src={boton1} height="30px" /></Link>
      </button>
      <button className="boton">
        <img src={Heart} height="30px" />
      </button>
    </div>
  );
}

export default Header4