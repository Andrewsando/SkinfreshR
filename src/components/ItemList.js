import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({ onAdd }) {
  const [productos, setProductos] = useState([]);

  const productosPromise = new Promise((myResolve, myReject) => {
    const pieles = [
      {
        nombre: "Aceite facial piel seca",
        precio: "USD $25",
        valor: 25,
        imagen:
          "https://images.unsplash.com/photo-1629380106825-771f7aefc6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        stock: 38,
      },
      {
        nombre: "Gel facial para piel grasa",
        precio: "USD $42",
        valor: 42,
        imagen:
          "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        stock: 16,
      },
      {
        nombre: "Fixed Textured piel mixta",
        precio: "USD $50",
        valor: 50,
        imagen:
          "https://images.unsplash.com/photo-1629380107944-e72da9ec91f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        stock: 56,
      },
      {
        nombre: "Face Gel piel mixta",
        precio: "USD $42",
        valor: 42,
        imagen:
          "https://images.unsplash.com/photo-1629732046253-e9c2641f7cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        stock: 23,
      },
      {
        nombre: "Killing Oil piel grasa",
        precio: "USD $30",
        valor: 30,
        imagen:
          "https://images.unsplash.com/photo-1629732048532-d809cada61c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        stock: 19,
      },
      {
        nombre: "Oil cleaner piel grasa",
        precio: "USD $48",
        valor: 48,
        imagen:
          "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        stock: 15,
      },
    ];
    setTimeout(() => {
      myResolve(pieles);
    }, "2000");
  })

  useEffect(() => {
      const getProductos = async () => {
          const prods = await productosPromise;
          setProductos(prods)
      };
      getProductos()
  },[])

  const list = productos.map((item) => <Item item={item} onAdd={onAdd}></Item>);

  return <ContentSection>{list}</ContentSection>;
}

const ContentSection = styled("ul")`
  display: flex;
  text-align: center;
  font-size: 2rem;
  color: "rgb(33,37,41)";
  font-weight: 100;
  height: 80px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default ItemList;
