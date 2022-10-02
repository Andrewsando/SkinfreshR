import { Divider, Paper, Typography } from "@mui/material";
import React from "react";
import ItemCount from "./ItemCount";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({item, onAdd}) => {
  return (
    <ImageSection>
      <Link to={"/item/" + item.id}> <img src={item.imagen} alt="imgskin"></img></Link>
      <Typography padding="0.5em 0" >{item.nombre}</Typography>
      <Divider />
      <ItemCount  stock={item.stock} onAdd={onAdd}></ItemCount>
    </ImageSection>
  );
};

const ImageSection = styled(Paper)`
    display: block;
    text-align:center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 100;
    border-radius: 20px;
    img {
      height: 14rem;
      border-radius: 20px 20px 0 0;
    }
`

export default Item;
