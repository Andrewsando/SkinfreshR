import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext } from "react";
import { Badge, IconButton } from "@mui/material";
import { CarritoContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { productos } = useContext(CarritoContext);
  return (
    (productos.length > 0 && (
    <IconButton aria-label="cart">
      <Link to={"/cart"}>
        <StyledBadge
          badgeContent={
            productos && productos.reduce((a, s) => a + s.cantidad, 0)
          }
          color="secondary"
        >
          <ShoppingCartIcon />
        </StyledBadge>

      </Link>
    </IconButton>
  )))
}

const StyledBadge = styled(Badge)`

    color: white;
`;

export default CartWidget;
