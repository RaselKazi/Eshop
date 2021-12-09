import React, { Fragment, useState } from "react";
import "./Header.css";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    {
      icon: (
        <ShoppingCartIcon
          style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history.push("/admin/dashboard");
    setOpen(false);
  }

  function orders() {
    history.push("/orders");
    setOpen(false);
  }
  function account() {
    history.push("/account");
    setOpen(false);
  }
  function cart() {
    history.push("/cart");
    setOpen(false);
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
    setOpen(false);
  }

  return (
    <Fragment>
      <Avatar
        src={user.avatar.url ? user.avatar.url : "/Profile.png"}
        alt="Profile"
        aria-controls="menu-appbar"
        onClick={() => setOpen(true)}
      />

      <Menu
        id="menu-appbar"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "111" }}
        keepMounted={false}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {options.map((item) => (
          <MenuItem
            key={item.name}
            onKeyDown={() => setOpen(false)}
            onClick={item.func}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default UserOptions;
