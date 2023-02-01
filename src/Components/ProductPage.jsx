import * as React from "react";
import { Card, Stack, CardMedia, Paper, Snackbar, CardContent, Tooltip, Typography, Box, Grid, Fab, } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";

import Navbar from "./Navbar";
import ProductListApi from "./ProductListApi/ProductListApi";
import "../index.css";

//alert/notification styles
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ProductPage(PRODUCT_STORE) {
  const [notificationOn, setNotificationOn] = React.useState(false);
  const [notificationOff, setNotificationOff] = React.useState(false);
  const [onAddStatus, setOnAddStatus] = useState([]);

  const onAddProducts = (item) => {
    //dispatching
    PRODUCT_STORE.addToCartHandler({
      id: item.id,
      quantity: item.quantity,
      img: item.img,
      title: item.title,
      alt: item.alt,
      price: item.price,
      totalPrice: item.totalPrice
    });
    setOnAddStatus([...onAddStatus, item.id]);
    setNotificationOn(true);
  }
  const onDeleteProducts = (item) => {
    //dispatching
    PRODUCT_STORE.removeFromCartHandler({
      id: item.id,
      quantity: item.quantity,
      img: item.img,
      title: item.title,
      alt: item.alt,
      price: item.price,
      totalPrice: item.totalPrice
    });
    setOnAddStatus([
      ...onAddStatus.filter((filterItem) => filterItem !== item.id),
    ]);
    setNotificationOff(true);
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotificationOn(false);
    setNotificationOff(false);
  }

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
          <Navbar count={PRODUCT_STORE.Data.length} />
        </Paper>
      </Box>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={notificationOn} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product upload successfully to cart
          </Alert>
        </Snackbar>
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

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {ProductListApi.map((item) => {
          return (
            <Card
              className="cardTransition"
              sx={{ width: "17rem", margin: "1rem" }}
              id={item.id}
            >
              <CardMedia
                component="img"
                height="230"
                image={item.img}
                alt={item.alt}
              />
              <CardContent>
                <Typography variant="body1" color="secondary.main">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="#42a5f5">
                  $ {item.price}.00
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  direction: "row",
                  justifyContent: "center",
                  pb: "1rem",
                }}
              >
                {onAddStatus.includes(item.id) ? (
                  <Fab size="small" color="secondary" aria-label="delete" onClick={() => onDeleteProducts(item)} >
                    <Tooltip title="Remove From Cart" arrow >
                      <DeleteIcon />
                    </Tooltip>
                  </Fab>
                ) : (
                  <Fab size="small" color="secondary" aria-label="add" onClick={() => {
                    onAddProducts(item);
                  }}>
                    <Tooltip title="Add To Cart" arrow >
                      <AddIcon />
                    </Tooltip>
                  </Fab>
                )}
              </Box>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};
export default ProductPage;
