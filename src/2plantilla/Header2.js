import React from "react";
import perfil from "../imagenes/img2/Ellipse 3.png";
import noti from "../imagenes/img2/Notifications none.png";

function Header2() {
  return (
    <div className="fondoperfil">
      <img src={perfil} height="56px" width="55px"/>
      <p className="letras">
        <strong>Hola, Peter <br />
        Que vas a pedir?</strong>
      </p>
      <img src={noti} height="56px" width="55px" />
    </div>
  );
}

export default Header2;
