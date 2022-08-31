import { styled } from "@mui/material/styles";

const ItemListContainer = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  backgroundColor: "black",
  textAlign: "center",
  color: "white",
  width: "20rem",
  margin: "20px auto",
}));

export default ItemListContainer;
