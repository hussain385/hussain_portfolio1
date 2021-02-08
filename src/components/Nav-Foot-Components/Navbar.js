import React from "react";
import Logo from "../../images/logo.png";
import styles from "./Navbar.module.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={styles.drawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={styles.listContainer}>
        {["Home", "Portfolio", "Start A Project"].map((text) => {
          let linkValue = "";
          if (text === "Portfolio") {
            linkValue = "portfolio";
          } else if (text === "Start A Project") {
            linkValue = "contact";
          }
          return (
            <ListItem className={styles.list} button key={text}>
              <Link
                to={`/${linkValue}`}
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-delay="400"
              >
                <ListItemText className={styles.text} primary={text} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
  return (
    <div>
      <AppBar
        className={styles.mainContainer}
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        <Toolbar
          className={styles.container}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Box component="div" className={styles.toggleContainer}>
            <Link to="/">
              <img src={Logo} alt={"portfolio Logo"} className={styles.logo} />
            </Link>
            <div className={styles.toggle}>
              <React.Fragment>
                <Button onClick={toggleDrawer("left", true)}>
                  <MenuIcon className={styles.toggler} />
                </Button>
                <Drawer
                  anchor={"left"}
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                >
                  {list("left")}
                </Drawer>
              </React.Fragment>
            </div>
          </Box>
          <Box
            component="div"
            className={styles.navLinkContainer}
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
          >
            <Typography className={styles.navLinks} variant="h6">
              <Link to="/">Home</Link>
            </Typography>
            <Typography className={styles.navLinks} variant="h6">
              <Link to="/portfolio">Portfolio</Link>
            </Typography>
            <Typography className={styles.projectLink} variant="h6">
              <Link to="/contact">Start A Project</Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
