import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Footer() {
  return (
    <div className="contenedorf">
      <h3 className="textoobtiene"> <strong>Obtiene tu pizza <br/> favorita</strong></h3>
      <p className="texto">
        Con precios realmente accesibles y sobre todo deliciosas no te olvides
        de revisar la seccion de promociones 
      </p>
      <br/>
      <button className="botonsaltar"><Link to="/plantilla2" >Saltar </Link></button>
    </div>
  );
}

export default Footer;
