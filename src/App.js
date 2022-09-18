import NavBar from "./components/NavBar";
import React, { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CarritoContextProvider from "./components/CartContext";

function App() {
  return (
    <CarritoContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes> 
    </BrowserRouter>
    </CarritoContextProvider>
  );
}

export default App;
