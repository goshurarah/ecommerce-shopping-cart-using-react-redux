import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import CartModal from "./CartModal";
import Navbar from "./Navbar";

//alert/notification styles
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CartPage(CART_STORE) {
  const [notificationOff, setNotificationOff] = React.useState(false);

  const onDeleteProducts = (item) => {
    //dispatching
    CART_STORE.removeFromCartHandler({
      id: item.id,
      quantity: item.quantity,
      img: item.img,
      title: item.title,
      alt: item.alt,
      price: item.price,
      totalPrice: item.totalPrice
    });
    setNotificationOff(true);
  }
  const incrementProducts = (item) => {
    //dispatching
    CART_STORE.incrementQuantityHandler({ id: item.id })
  }
  const decrementProducts = (item) => {
    // dispatching
    CART_STORE.decrementQuantityHandler({ id: item.id })
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotificationOff(false);
  }

  let cartDetailArray = CART_STORE.Data;
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={3}
          sx={{
            m: 2,
            display: "flex",
            direction: "row",
            justifyContent: "space-evenly",
            borderRadius: "2rem",
            width: "70%",
          }}
        >
          <Navbar count={CART_STORE.Data.length} />
        </Paper>
      </Box>

      <CartModal modal={CART_STORE} />

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={notificationOff}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Product delete successfully from cart!
          </Alert>
        </Snackbar>
      </Stack>

      <Container>
        {cartDetailArray.map((item, index) => {
          return (
            <Grid
              container
              direction="column"
              alignItems="center"
            >
              <Card
                sx={{
                  display: "flex",
                  width: "65%",
                  height: "10rem",
                  bgcolor: "rgb(221 214 254)",
                  borderRadius: "0.75rem",
                  mt: 2,
                }}
                id={item.id}
              >
                <Box
                  sx={{ width: '100%', height: '10rem' }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: '10rem', width: '10rem' }}
                    image={item.img}
                    alt="images"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="body1" color="secondary.main">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="#42a5f5">
                      Quantity : {item.quantity}
                    </Typography>
                    <Typography variant="body1" color="#42a5f5">
                      $ {item.price * item.quantity}.00
                    </Typography>
                  </CardContent>
                </Box>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-end"
                >
                  <Stack spacing={1} direction="column">
                    <Button variant="outlined" size="small" onClick={() => incrementProducts(item)}>
                      <AddIcon
                      />
                    </Button>
                    <Button variant="outlined" color="error" size="small" onClick={() => decrementProducts(item)}>
                      <RemoveIcon />
                    </Button>
                  </Stack>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Box sx={{ pr: 4 }}>
                    <Fab size="medium" color="secondary" aria-label="delete">
                      <Tooltip title="Delete" arrow>
                        <DeleteIcon onClick={() => onDeleteProducts(item)} />
                      </Tooltip>
                    </Fab>
                  </Box>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Container>
    </>
  );
};
export default CartPage;
