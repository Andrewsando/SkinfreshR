import NavBar from './components/NavBar';
import React, { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {
const [carrito, setCarrito] = useState([])
const item = {nombre:"acido hialuronico"}
  return (
    <>
      <NavBar/>
      <ItemListContainer>Bienvenido a tu página</ItemListContainer>
      <ItemCount item={item} stock={5} onAdd={(cantidad) => {setCarrito({cantidad: cantidad, item:item})}}></ItemCount>
   </>
     );
}

export default App;
