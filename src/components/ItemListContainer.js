import { styled } from "@mui/material/styles";

const ItemListContainer = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  backgroundColor: "white",
  textAlign: "center", 
}));

export default ItemListContainer;
