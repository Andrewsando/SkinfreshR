import { AppBar, Button, Typography } from "@mui/material"
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import React from "react";

const pages = ['Tienda', 'nosotros', 'Blog'];
const title = 'SkinFresh'

const NavBar = () => {
  return (
    <AppBar sx={{backgroundColor: 'rgb(33,37,41)'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={{
            fontFamily: 'Merriweather, serif',
            fontSize: '30px',
            marginRight: '15px'
          }}>{title}</Typography>
          {pages.map((page) => (
            <Button color="inherit" key={page} textAlign="center">{page}</Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  )

}
export default NavBar