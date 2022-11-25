import React from "react";
import { useParams } from "react-router-dom";
import {datos} from '../2plantilla/datosPizza'


const DatosBody3 = () => {

 let {id} = useParams()
  
let productSelect = datos.find(datos => datos.id === id)
console.log(productSelect)
  return (
    <div className="fondopizza">
          
          <img src={productSelect.img} alt="Hawaina" />
          <p>{productSelect.title}</p>
    </div>
  )
}

export default DatosBody3;
