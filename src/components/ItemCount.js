import { Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";

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
    font-size: 1rem;
    color: white;
    margin-bottom: 1.5rem;
    font-weight: 50px;
    max-width: 30%
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
    margin: 1rem auto;
    padding: 30px;
    background: #FFCEC2;
    width: 19rem;
    border-radius: 6rem;

`
const ItemCountAlign = styled("div")`
    display: flex;
    text-align:center;
    margin: 0 auto;
    justify-content:space-around;

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
