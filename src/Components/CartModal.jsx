import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function CartModal(CART_MODAL_STORE) {
  let totalItem = CART_MODAL_STORE.modal.Data.map((quantityItems) => {
    return quantityItems.quantity
  }).reduce((accumulate, currentVal) => {
    return accumulate + currentVal
  })

  let currentTotalPrice = CART_MODAL_STORE.modal.Data.map((items) => {
    return items.totalPrice
  }).reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <Box
          sx={{ display: "flex", direction: "row", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            Your Cart Summary!
          </Button>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle
            sx={{ textAlign: "center" }}
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
          >
            Your Cart Summary
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Total Items = {totalItem}</DialogContentText>
            <DialogContentText>Total Amount = {currentTotalPrice}</DialogContentText>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              autoFocus
              onClick={handleClose}
              variant="contained"
              color="secondary"
            >
              CheckOut!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default CartModal;
