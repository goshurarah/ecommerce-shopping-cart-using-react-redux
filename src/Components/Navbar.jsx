import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

import CartIcon from "./CartIcon";

function Navbar(NAVBAR_STORE) {
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "50%" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<Link className="Navbar-link" to="/"><HomeIcon /></Link>}
      />

      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<Link className="Navbar-link" to="/cart"><CartIcon count2={NAVBAR_STORE.count} /></Link>}
      />
    </BottomNavigation>
  );
}
export default Navbar;
