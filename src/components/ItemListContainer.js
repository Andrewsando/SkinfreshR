import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { CarritoContext } from "./CartContext";
import ItemList from "./ItemList";

const Container = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  backgroundColor: "white",
  textAlign: "center",
}));

const ItemListContainer = ({}) => {
  const {addItem} = useContext (CarritoContext)
  return (
    <Container>
      <ItemList
        onAdd={(item, cantidad) => {
          addItem( item, cantidad );
        }}
      />
    </Container>
  );
};

export default ItemListContainer;
