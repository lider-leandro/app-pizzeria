import React, { useState } from "react";
import ContentCard from "../ContentCard";
import pizza from "../imagenes/descarga.jpg";

function Header() {
  return (
    <div className="inicio">
      <img className="imgh" src={pizza} width="65px" height="55px" />
      <span className="titulo">
        <strong>hol</strong>
        <ContentCard />
      </span>
    </div>
  );
}

export default Header;
