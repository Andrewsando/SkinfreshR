import { Typography } from "@mui/material";
import React from "react";
import ItemCount from "./ItemCount";
import { styled } from "@mui/material";

const Item = ({item, onAdd}) => {
  return (
    <ImageSection>
      <img src={item.imagen} alt="imgskin"></img>
      <Typography>{item.nombre}</Typography>
      <ItemCount item={item} stock={item.stock} onAdd={onAdd}></ItemCount>
    </ImageSection>
  );
};

const ImageSection = styled("div")`
    display: block;
    text-align:center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 100;
    img {
      height: 18rem;
      border-radius: 20px;
    }
`

export default Item;
