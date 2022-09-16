import { AppBar, Button, styled, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const title = "SkinFresh";

const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor: "rgb(33,37,41)" }} position="static">
      <StyledContainer maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{
              fontFamily: "Merriweather, serif",
              fontSize: "30px",
              marginRight: "15px",
            }}
          >
            <Link to={"/"}>{title}</Link>
          </Typography>
          <Link to={"/category/seca"}>
            <Button color="inherit" textAlign="center">
              piel seca
            </Button>
          </Link>
          <Link to={"/category/mixta"}>
            <Button color="inherit" textAlign="center">
              piel mixta
            </Button>
          </Link>
          <Link to={"/category/grasa"}>
            <Button color="inherit" textAlign="center">
              piel grasa
            </Button>
          </Link>
        </Toolbar>
        <CartWidget />
      </StyledContainer>
    </AppBar>
  );
};
export default NavBar;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  svg {
    margin: auto 0;
  }
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
