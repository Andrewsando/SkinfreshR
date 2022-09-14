import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const itemPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const itemDelay = {
      nombre: "Aceite facial piel seca",
      descripcion:
        "Este aceite es ideal para las pieles que secas con tendencia a arrugarse pronto, no es comedogénico y busca alimentar tu piel con muchas vitaminas y minerales, cómpralo, no te arrepentirás",
      precio: "USD $25",
      valor: 25,
      imagen:
        "https://images.unsplash.com/photo-1629380106825-771f7aefc6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      stock: 38,
    };
    resolve(itemDelay);
  }, "2000");
});

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    itemPromise.then((itemDetail) => {
      setItem(itemDetail);
      setOpen(true);
    });
  }, []);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <ItemDetail item={item} />
      </Box>
    </Modal>
  );
};

export default ItemDetailContainer;
