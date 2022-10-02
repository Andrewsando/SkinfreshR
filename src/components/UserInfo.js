import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Timestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../api";
import { CarritoContext } from "./CartContext";


const UserInfo = () => {
  const { productos, getTotal, clear } = useContext(CarritoContext);
  const [usuario, setUsuario] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const userChange = (event) => {
    setUsuario(event.target.value);
  };
  const phoneChange = (event) => {
    setTelefono(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = (event) => {
    const newOrder = {
      buyer : {name:usuario, telefono:telefono, email:email},
      items: productos,
      date: Timestamp.fromDate(new Date()),
      total: getTotal(),
     }
     createItem(newOrder).then(id => {
      clear()
      navigate(`/order-completed/${id}`)
     })
  };

  return (
    <Paper>
      <Box sx={{padding: "1em"}}>
        <Typography variant="body1">Ingresa tu usuario</Typography>
        <TextField size="small" value={usuario} onChange={userChange}></TextField>
        <Typography variant="body1">Ingresa tu telefono</Typography>
        <TextField
          value={telefono}
          type="number"
          size="small"
          onChange={phoneChange}
        ></TextField>
        <Typography variant="body1">Ingresa tu correo electrónico</Typography>
        <TextField value={email} size="small" type="email" onChange={emailChange}></TextField>
      </Box>
      <Divider />
      <Button onClick={handleClick} disabled={!usuario || !telefono || !email}>Finaliza tu compra</Button>
    </Paper>
  );
};

export default UserInfo;
