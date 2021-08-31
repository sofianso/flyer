import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Toolbar,
  Button,
  Menu,
  useMediaQuery,
  useTheme,
  MenuItem,
} from "@material-ui/core";
import { DrawerComponent } from "./DrawerComponent/DrawerComponent";
import { MdHome } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { LoginForm } from "../accountBox/LoginForm";

export const Navbar = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = (e) => {
    setAnchorEl(null);
  };
  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  // Breakpoints
  return (
    <Router>
      <div>
        <AppBar color="primary">
          <Toolbar>
            <Typography>FLYER</Typography>

            {isMatch ? (
              <DrawerComponent />
            ) : (
              <>
                {" "}
                <Tabs
                  onChange={handleClickTab}
                  indicatorColor="secondary"
                  value={value}
                >
                  <Tab icon={<MdHome />} disableRipple label="Home" />

                  <Tab icon={<BsCardText />} disableRipple label="About" />
                </Tabs>
                {/* **ISSUE**...Login cannot redirect to SignInOutContainer container */}
                <Switch>
                  <Route>
                    <Link exact path to="/login">
                      <Button
                        to="/login"
                        variant="contained"
                        color="secondary"
                        disableRipple
                        // aria-controls="menu"
                      >
                        Login
                      </Button>
                    </Link>
                  </Route>
                </Switch>
              </>
            )}
          </Toolbar>
        </AppBar>

        {/* Menu needs work. Disabled until further notice... */}
        {/* <Menu
        style={{ marginTop: "35px" }}
        id="menu"
        onClose={handleCloseMenu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        <MenuItem>My Account</MenuItem>
        <MenuItem>Membership</MenuItem>
        <MenuItem>Settings</MenuItem>
      </Menu> */}
      </div>
    </Router>
  );
};
