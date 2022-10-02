import { Button, Divider, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "./CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const { addItem } = useContext(CarritoContext);
  const [agregados, setAgregados] = useState(false);
  const onAdd = (n) => {
    addItem(item, n);
    setAgregados(true);
  };
  return (
    <ItemDetailDiv>
      <img src={item.imagen} alt="imgskin"></img>
      <Typography variant="h5">{item.nombre}</Typography>
      <Divider />
      <Typography variant="body2">{item.descripcion}</Typography>
      <Typography variant="h6">{item.precio}</Typography>
      <Typography variant="body2">
        {item.stock > 0 ? "Disponible" : "Agotado"}
      </Typography>
      {!agregados ? (
        <ItemCount onAdd={onAdd} stock={item.stock} />
      ) : (
        <Button sx={{ margin: "auto" }}>
          <Link to={"/cart"}>Terminar mi compra</Link>
        </Button>
      )}
    </ItemDetailDiv>
  );
}
export default ItemDetail;

const ItemDetailDiv = styled(Paper)`
  background-color: white;
  text-align: center;
  color: rgb(33, 37, 41);
  max-width: 30vw;
  margin: 1em auto;
  border-radius: 20px;
  img {
    max-width: 30vw;
    border-radius: 20px 20px 0 0;
  }
`;
