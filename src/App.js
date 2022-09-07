import NavBar from './components/NavBar';
import React, { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';



function App() {
const [carrito, setCarrito] = useState([])
const item = {nombre:"acido hialuronico"}
  return (
    <>
      <NavBar/>
      <ItemListContainer>Bienvenido a tu página
        <ItemList onAdd={(cantidad) => {setCarrito({cantidad: cantidad, item:item})}}/>
      </ItemListContainer>
   </>
   
     );
}

export default App;
