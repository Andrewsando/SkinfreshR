import NavBar from "./components/NavBar";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CarritoContextProvider from "./components/CartContext";
import { Login } from "@mui/icons-material";
import OrderCompleted from "./OrderCompleted";

function App() {
  return (
    <CarritoContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order-completed/:id" element={<OrderCompleted />}></Route>
      </Routes> 
    </BrowserRouter>
    </CarritoContextProvider>
  );
}

export default App;
