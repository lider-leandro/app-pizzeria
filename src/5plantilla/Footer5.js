import React from 'react'
import home from "../imagenes/img2/home-1.png";
import heart from "../imagenes/img2/heart.png";
import cart from "../imagenes/img2/cart-4.png";
import user from "../imagenes/img2/user-1.png";
import { Link } from 'react-router-dom';


function Footer5() {
  return (
    <div className="fondofooter">
    <button className="menu">
      <Link to="/plantilla2"> <img src={home} height="30px" /> </Link>
    </button>
    <button className="menu">
      <Link to="" ><img src={heart} height="30px"  /></Link>
    </button>
    <button className="menu">
      <Link to="/carrito" ><img src={cart}  height="30px" /></Link>
    </button>
    <button className="menu">
      <Link><img src={user} height="30px"  /></Link>
    </button>
</div>
  )
}

export default Footer5