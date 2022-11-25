import React from "react";
import home from "../imagenes/img2/home-1.png";
import heart from "../imagenes/img2/heart.png";
import cart from "../imagenes/img2/cart-4.png";
import user from "../imagenes/img2/user-1.png";
import { Link } from "react-router-dom";
import Header5 from "../5plantilla/Header5";
import Body5 from "../5plantilla/Body5";
import Header3 from "../3plantilla/Header3";
import Header2 from "./Header2";
import Body2 from "./Body2";

function Footer2() {
  return (
       <div className="fondofooter">
      <button className="menu">
        <Link to="/plantilla2" > <img src={home} height="30px" /> </Link> 
      </button>
      <button className="menu">
        <img src={heart} height="30px" />
      </button>
      <button className="menu">
      <Link to="/carrito" > <img src={cart} height="30px" /> </Link> 
      </button>
      <button className="menu">
        <img src={user} height="30px" />
      </button>
    </div>
   
  );
}

export default Footer2;
