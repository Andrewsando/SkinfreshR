import { Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";

let pieles = {
  seca: {
    productos: [
      {
        nombre: "Face Oil",
        precio: "USD $25",
      },
      {
        nombre: "Natural Oil",
        precio: "USD $30",
      },
    ],
  },

  mixta: {
    productos: [
      {
        nombre: "Fixed Textured",
        precio: "USD $50",
      },
      {
        nombre: "Face Gel",
        precio: "USD $42",
      },
    ],
  },

  grasa: {
    productos: [
      {
        nombre: "Killing Oil",
        precio: "USD $30",
      },
      {
        nombre: "Oil cleaner",
        precio: "USD $48",
      },
    ],
  },
};

const ItemCount = ({item, stock, onAdd}) => {
  const [n, setN] = useState(0)

  function decrecer() {
    setN(n - 1)
  }
  function crecer() {
    setN(n + 1)
  }

  return (
    <ItemCountContainer>
    <ItemTitle>{item.nombre}</ItemTitle>
    <ItemCountAlign>
      <StyleButton disabled = {n <= 0} onClick={decrecer}> - </StyleButton>
      <ItemTitle>{n}</ItemTitle>
      <StyleButton disabled = { n === stock } onClick={crecer}> + </StyleButton>
    </ItemCountAlign>
      <AddingButton disabled = { stock === 0 } onClick={onAdd(n)}>Agregar al carrito</AddingButton>
    </ItemCountContainer>
  );
};

const ItemTitle = styled(Typography)`
    display: block;
    text-align:center;
    font-size: 2rem;
    color: white;
    margin-bottom: 1.5rem;
    font-weight: 100;
`
const StyleButton = styled(Button)`
    text-align:center;
    font-size: 1rem;
    color: white;
    background-color: rgb(33,37,41);
    border-radius: 3rem;    
   
`
const ItemCountContainer = styled("div")`
    display: block;
    text-align:center;
    margin: 2rem auto;
    padding: 50px;
    background: #FFCEC2;
    width: 20rem;
    border-radius: 6rem;

`
const ItemCountAlign = styled("div")`
    display: flex;
    text-align:center;
    margin: 0 auto;
    justify-content: space-between;

`
const AddingButton = styled(Button)`
    text-align:center;
    font-size: 1rem;
    color: white;
    background-color: rgb(33,37,41);
    border-radius: 3rem; 
    margin-top:3rem;
    width: 17rem;

`

export default ItemCount;
