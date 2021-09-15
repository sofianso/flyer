import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbarButton: {
    fontSize: "1rem",
    border: "none",
    backgroundColor: "none",
    outline: "none",
    color: "inherit",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    disableRipple: true,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact",
    },
    {
      menuTitle: "About",
      pageURL: "/about",
    },
    {
      menuTitle: "Login",
      pageURL: "/login",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FLYER
          </Typography>

          {/* responsive design for Navbar starts here */}
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            // response design for Navbar ends here

            <div className={classes.headerOptions}>
              <Button
                className={classes.navbarButton}
                variant="outlined"
                disableRipple
                onClick={() => handleButtonClick("/")}
              >
                HOME
              </Button>
              <Button
                className={classes.navbarButton}
                variant="outlined"
                disableRipple
                onClick={() => handleButtonClick("/contact")}
              >
                CONTACT
              </Button>
              <Button
                className={classes.navbarButton}
                variant="outlined"
                disableRipple
                onClick={() => handleButtonClick("/membership")}
              >
                Membership
              </Button>
              <Button
                className={classes.navbarButton}
                variant="outlined"
                disableRipple
                onClick={() => handleButtonClick("/about")}
              >
                ABOUT
              </Button>

              <Button
                className={classes.navbarButton}
                variant="outlined"
                disableRipple
                onClick={() => handleButtonClick("/login")}
              >
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
