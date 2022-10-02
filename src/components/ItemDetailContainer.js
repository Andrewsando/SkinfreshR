import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../api";
import ItemDetail from "./ItemDetail";

const itemPromise = (itemId) => {
  return getItemById(itemId);
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    itemPromise(id).then((itemDetail) => {
      setItem(itemDetail);
    });
  }, [id]);

  return <>{item && <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
