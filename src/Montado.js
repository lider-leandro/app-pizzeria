import React from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import App4 from './App4';
import App5 from './App5';
import App from './App';
import App3 from './App3';
import App2 from './App2';

function Montado() {
  return (  
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/plantilla2' element={<App2/>} />
      <Route path='/carrito' element={<App5/>} />
      <Route path='/pedido/:productId' element={<App3/>} />
      <Route path='/atras' element={<App2/>} />
      
    </Routes>
    </BrowserRouter>
    </div>     
  );
}

export default Montado