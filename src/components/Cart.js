import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "./CartContext";

function Cart() {
  const { productos, removeItem } = useContext(CarritoContext);

  return (
    <Grid container spacing={2} margin="1em" borderColor={"black"}>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Grid xs="4" md="4" lg="4" sx={{ maxWidth: 275 }}>
            <Card variant="outlined">
              <CardContent variant="outlined">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Productos elegidos
                </Typography>
                <Typography variant="h5" component="div">
                  {producto.item.nombre}
                </Typography>
                <Typography variant="body2">
                  {producto.item.descripcion}
                </Typography>
                <Typography variant="body2">{producto.item.precio}</Typography>
                <Typography variant="body2">
                  Cantidad {producto.cantidad}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => removeItem(producto.item)} size="small">
                  Eliminar de carrito
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <>
          <Stack>
            <Typography variant="body2">
              No tiene productos en carrito
            </Typography>
            <Button variant="contained">
              <Link to={"/"}>Volver a la página de inicio</Link>
            </Button>
          </Stack>
        </>
      )}
      <h3>
        USD $
        {productos &&
          productos.reduce((a, s) => a + s.cantidad * s.item.valor, 0)}
      </h3>
    </Grid>
  );
}
export default Cart;
