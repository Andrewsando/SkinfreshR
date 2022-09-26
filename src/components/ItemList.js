import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems, getItemsByCondition } from "../api";
import Item from "./Item";

function ItemList({ onAdd }) {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  const productosPromise = (categoryId) => {
    return categoryId ? getItemsByCondition(categoryId): getItems()
  };

  useEffect(() => {
    const getProductos = async () => {
      const prods = await productosPromise(id);
      setProductos(prods);
    };
    console.log(id)
    getProductos();
  }, [id]);

  return (
    <ContentSection>
      {productos.map((item) => (
        <Item
          item={item}
          onAdd={(cant) => onAdd(item, cant)}
          key={item.id}
        ></Item>
      ))}
    </ContentSection>
  );
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
