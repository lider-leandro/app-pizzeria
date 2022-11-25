import React, {useState} from 'react'
import mexicana from "../imagenes/img2/5.jpg";
import hawaina from "../imagenes/img2/2.png";

export const initialProduct=[
{
    id: 1,
    img: hawaina,
    title: 'hawaina'
},
{
    id: 2,
    img: hawaina,
    title: 'hawaina'
},
{
    id: 1,
    img: hawaina,
    title: 'hawaina'
},
];

const componentPizzas = () => {
  return (
    <div>
        <button className="row">
          <Link to="/pedido15" ><img src={hawaina} height="100px"  /></Link>
          <p>hauwiana</p>
        </button>
    </div>
  )
}

export default componentPizzas