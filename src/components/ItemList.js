import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pieles } from "../data/productos";
import Item from "./Item";

function ItemList({ onAdd }) {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  const productosPromise = (categoryId) => {
    return new Promise((myResolve, myReject) => {
      setTimeout(() => {
        myResolve(
          categoryId ? pieles.filter((p) => p.categoria === categoryId) : pieles
        );
      }, "500");
    });
  };

  useEffect(() => {
    const getProductos = async () => {
      const prods = await productosPromise(id);
        setProductos(prods);
    };
    getProductos();
  }, [id]);

  const list = productos.map((item) => (
    <Item item={item} onAdd={(cant) => onAdd(item, cant)} key={item.id}></Item>
  ));

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
