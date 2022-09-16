import { styled } from "@mui/material/styles";
import ItemList from "./ItemList";

const Container = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  backgroundColor: "white",
  textAlign: "center",
}));

const ItemListContainer = ({addCarrito}) => {
  return (
    <Container>
      <ItemList
        onAdd={(item, cantidad) => {
          addCarrito({ item, cantidad });
        }}
      />
    </Container>
  );
};

export default ItemListContainer;
