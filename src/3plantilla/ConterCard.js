import React, {useState} from 'react'
import menos from "../imagenes/img3/_.png";
import mas from "../imagenes/img3/+.png";

const ConterCard = () => {
    let [conter, setConter] = useState(1);

    const incrementCounter = () => {
        setConter(conter+1);
    }
    const decrementCounter = () => {
      setConter(conter-1);
    }

  return (
    <div className="acumulador">
        <button onClick={decrementCounter} className="botonacu">
          <img src={menos} width="20px" />
        </button>
        <p>{conter}</p>
        <button onClick={incrementCounter} className="botonacu">
          <img src={mas} width="20px" />
        </button>
      </div>
  )
}

export default ConterCard