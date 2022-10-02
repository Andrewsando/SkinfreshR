import { Button, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link, useParams } from "react-router-dom";

const OrderCompleted = () => {
  const { id } = useParams();

  return (
    <Stack>
      <Paper sx={{padding: "2em", textAlign: "center", }}>
        <img alt="bu" src="https://andrewsando.github.io/skinfresh/nyan-cat.gif"></img>
        <Typography variant="h4">Gracias por tu pedido</Typography>
        <Typography variant="h5">Tu numero de orden es: #{id}</Typography>
        <Button>
            <Link to={"/"}>Volver al inicio</Link>
        </Button>
      </Paper>
    </Stack>
  );
};

export default OrderCompleted;
