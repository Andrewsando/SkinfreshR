import { Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [n, setN] = useState(0);

  function decrecer() {
    setN(n - 1);
  }
  function crecer() {
    setN(n + 1);
  }

  return (
    <ItemCountContainer>
      <ItemCountAlign>
        <StyleButton disabled={n <= 0} onClick={decrecer} size="small">
          -
        </StyleButton>
        <ItemTitle>{n}</ItemTitle>
        <StyleButton disabled={n === stock} onClick={crecer} size="small">
          +
        </StyleButton>
      </ItemCountAlign>
      <AddingButton disabled={stock === 0} onClick={() => onAdd(n)}>
        Añadir al carrito
      </AddingButton>
    </ItemCountContainer>
  );
};

const ItemTitle = styled(Typography)`
  display: block;
  text-align: center;
  font-size: 2rem;
  color: white;
  font-weight: bolder;
  max-width: 30%;
`;
const StyleButton = styled(Button)`
  text-align: center;
  font-size: 1rem;
  color: white;
  background-color: rgb(33, 37, 41);
  border-radius: 3rem;
  min-width: 50px;
  font-weight: bold;

  &.Mui-disabled {
    background-color: rgba(33, 37, 41, 0.2) ;
  }
`;
const ItemCountContainer = styled("div")`
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 30px;
  background: #ffcec2;
  border-radius: 0 0 20px 20px;
`;
const ItemCountAlign = styled("div")`
  display: flex;
  text-align: center;
  margin: 0 auto;
  justify-content: space-around;
`;
const AddingButton = styled(Button)`
  text-align: center;
  font-size: 1rem;
  color: white;
  background-color: rgb(33, 37, 41);
  border-radius: 3rem;
  margin-top: 2rem;
  padding: 0.5em 1em;
`;

export default ItemCount;
