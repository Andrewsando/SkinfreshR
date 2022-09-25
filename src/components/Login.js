import { Typography } from "@mui/material";
import React, { useState } from "react";


const Login = () =>{
    const [usuario, setUsuario] =useState(0);

    
return(
<div>
<Typography variant="h2">Ingresa tu usuario</Typography>
<Typography variant="h4">Ingresa tu contraseña</Typography>
</div>
)
}

export default Login;