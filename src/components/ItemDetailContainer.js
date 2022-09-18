import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pieles } from "../data/productos";
import ItemDetail from "./ItemDetail";

const itemPromise = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemDelay = pieles.find((p) => p.id === itemId);
      resolve(itemDelay);
    }, "2000");
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    itemPromise(parseInt(id)).then((itemDetail) => {
      setItem(itemDetail);
    });
  }, [id, item]);

  return <Box>{item && item.id && <ItemDetail item={item} />}</Box>;
};

export default ItemDetailContainer;
