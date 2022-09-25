import { Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "./CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const {addItem, productos} = useContext(CarritoContext)
  const [agregados, setAgregados] = useState(false)
  const onAdd = (n) => {
    addItem(item, n)
    setAgregados(true)
  }
  return (
    <ItemDetailDiv>
      {console.log(productos)}
      <img src={item.imagen} alt="imgskin"></img>
      <Typography variant="h4">{item.nombre}</Typography>
      <Divider />
      <Typography variant="body2">{item.descripcion}</Typography>
      <Typography variant="h6">{item.precio}</Typography>
      <Typography variant="caption">
        {item.stock > 0 ? "Disponible" : "Agotado"}
      </Typography>
      {!agregados ? ( 
        <ItemCount onAdd={onAdd} stock={item.stock} />
      ) : (
        <Link to={"/cart"}>Terminar mi compra</Link> 
      )}
    </ItemDetailDiv>
  );
}
export default ItemDetail;

const ItemDetailDiv = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  text-align: center;
  color: rgb(33, 37, 41);
  max-width: 30vw;
  padding: 1rem;
  img {
    max-width: 30vw;
  }
`;
