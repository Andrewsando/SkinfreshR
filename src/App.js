import NavBar from "./components/NavBar";
import React, { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const [carrito, setCarrito] = useState([]);

  const addCarrito = (itemCant) => {    
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer addCarrito={addCarrito} />}></Route>
        <Route path="/category/:id" element={<ItemListContainer addCarrito={addCarrito} />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
