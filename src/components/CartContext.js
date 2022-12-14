import React, { useState } from "react";

export const CarritoContext = React.createContext();

function CarritoContextProvider({ children }) {
  const [productos, setProductos] = useState([]);

  const addItem = (item, cantidad) => {
    const pExistente = productos.find((p) => p.item.id === item.id);

    if (pExistente) {
      pExistente.cantidad += cantidad;
      setProductos([
        ...productos.filter((p) => p.item.id !== item.id),
        pExistente,
      ]);
    } else {
      const producto = { item, cantidad };
      setProductos([...productos, producto]);
    }
  };

  const removeItem = (item) => {console.log(removeItem)
    setProductos([...productos.filter((p) => p.item.id !== item.id)]);
  };

  const clear = () => {
    setProductos([]);
  };

  const isInCart = (item) => {
    const pExistente = productos.find((p) => p.item.id === item.id);

    return !!pExistente;
  };

  const getTotal = () => {
    return productos && productos.reduce((a, s) => a + s.cantidad * s.item.valor, 0)
};

  return (
    <CarritoContext.Provider
      value={{ productos, addItem, removeItem, clear, isInCart, getTotal }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoContextProvider;
