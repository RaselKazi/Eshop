import { React, useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import UserOptions from "./UserOptions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logoImg: {
    display: "none",
    width: "150px",
    transition: "all 0.5s",
    "&:hover": {
      color: alpha(theme.palette.primary.main, 0.9),
      transform: "scale(0.8)",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  title: {
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  link: {
    transition: "all 0.5s",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: alpha(theme.palette.primary.main, 0.9),
      transform: "scale(1.1)",
    },
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconList: {
    padding: theme.spacing(0, 3),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    paddingLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    color: "black",
    "&:hover": {
      color: "tomato",
    },
  },
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
}));
export default function Navber() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const classes = useStyles();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Box className={classes.flexBox} width="100%">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box className={classes.flexBox}>
              <Link to="/">
                <img className={classes.logoImg} src={logo} alt="Ecommerce" />
              </Link>
            </Box>
            <Box className={classes.flexBox}>
              <Typography
                className={classes.title}
                variant="h6"
                align="center"
                noWrap
              >
                <Link className={classes.link} to="/">
                  Home
                </Link>
              </Typography>
              <Typography
                className={classes.title}
                variant="h6"
                align="center"
                noWrap
              >
                <Link to="/products" className={classes.link}>
                  Products
                </Link>
              </Typography>
              <Typography
                className={classes.title}
                variant="h6"
                color="textPrimary"
                align="center"
                noWrap
              >
                <Link to="/contact" className={classes.link}>
                  Contact
                </Link>
              </Typography>
              <Typography
                className={classes.title}
                variant="h6"
                color="textPrimary"
                align="center"
                noWrap
              >
                <Link to="/about" className={classes.link}>
                  About
                </Link>
              </Typography>
            </Box>

            <Box className={classes.flexBox}>
              <div m={3} className={classes.iconList}>
                <Link to="/search" className={classes.link}>
                  <SearchIcon fontSize="large" className={classes.icon} />
                </Link>

                <Link to="/cart" className={classes.link}>
                  <Badge badgeContent={cartItems.length} color="error">
                    <AddShoppingCartIcon
                      fontSize="large"
                      className={classes.icon}
                    />
                  </Badge>
                </Link>
              </div>

              {isAuthenticated ? (
                <UserOptions user={user} />
              ) : (
                <Button variant="outlined" color="secondary">
                  <Link to="/login" className={classes.link}>
                    Login
                  </Link>
                </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List component="nav" aria-label="main mailbox folders">
            <Divider />
            <ListItem button>
              <Link className={classes.link} to="/">
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <Divider />
            <ListItem button>
              <Link className={classes.link} to="/products">
                <ListItemText primary="Products" />
              </Link>
            </ListItem>
            <Divider />
            <ListItem button>
              <Link className={classes.link} to="/contact">
                <ListItemText primary="Contact" />
              </Link>
            </ListItem>
            <Divider />
            <ListItem button>
              <Link className={classes.link} to="/about">
                <ListItemText primary="About" />
              </Link>
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}
