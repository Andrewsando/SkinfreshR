import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../api";
import { pieles } from "../data/productos";
import ItemDetail from "./ItemDetail";

const itemPromise = (itemId) => {
  return getItemById(itemId)
  };


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    itemPromise(id).then((itemDetail) => {
      setItem(itemDetail);
      console.log(itemDetail)
    });
  }, [id]);

  return <Box>{item && <ItemDetail item={item} />}</Box>;
};

export default ItemDetailContainer;
