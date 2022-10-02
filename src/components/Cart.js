import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "./CartContext";
import UserInfo from "./UserInfo";

function Cart() {
  const { productos, removeItem, getTotal } = useContext(CarritoContext);

  return (
    <Grid
      container
      sx={{ textAlign: "center", justifyContent: "space-around", padding: "1em" }}
      margin="3em 0"
    >
      {productos.length > 0 ? (
        <>
          <Grid item xs={12} md={6} lg={4}>
            {productos.map((producto) => (
              <Grid sx={{margin: "1em"}} >
                <Card variant="outlined">
                  <CardContent variant="outlined">
                    <Typography variant="h5" component="div">
                      {producto.item.nombre}
                    </Typography>
                    <Typography variant="body2">
                      {producto.item.descripcion}
                    </Typography>
                    <Typography variant="body2">
                      {producto.item.precio}
                    </Typography>
                    <Typography variant="body2">
                      Cantidad: {producto.cantidad}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => removeItem(producto.item)}
                      size="small"
                    >
                      Eliminar de carrito
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper>
              <Typography variant="h5">Total: USD ${getTotal()}</Typography>
              <Divider />
              <UserInfo />
            </Paper>
          </Grid>
        </>
      ) : (
        <>
          <Grid item md={4} xs={4} lg={4}>
            <Typography variant="h5">
              No tiene productos en carrito
            </Typography>
            <Button>
              <Link to={"/"}>Volver a la página de inicio</Link>
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}
export default Cart;
