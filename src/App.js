import NavBar from './components/NavBar';
import React, { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Typography } from '@mui/material';



function App() {
const [carrito, setCarrito] = useState([])
const item = {nombre:"acido hialuronico"}
  return (
    <>
      <NavBar/>
      <ItemListContainer>
        <Typography variant='h3' >Bienvenido a tu página </Typography>
        <ItemList onAdd={(cantidad) => {setCarrito({cantidad: cantidad, item:item})}}/>
        <ItemDetailContainer/>
      </ItemListContainer>
   </>
   
     );
}

export default App;
