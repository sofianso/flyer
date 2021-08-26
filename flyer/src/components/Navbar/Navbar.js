import React, { useState } from "react";
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
  Grid,
  MenuItem,
} from "@material-ui/core";
import { DrawerComponent } from "./DrawerComponent/DrawerComponent";
import { MdHome } from "react-icons/md";
import { BsCardText } from "react-icons/bs";

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
              <Button
                aria-controls="menu"
                disableRipple
                onClick={handleOpenMenu}
                variant="contained"
                color="secondary"
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        style={{ marginTop: "35px" }}
        id="menu"
        onClose={handleCloseMenu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        <MenuItem>My Account</MenuItem>
        <MenuItem>Membership</MenuItem>
        <MenuItem>Settings</MenuItem>
      </Menu>
    </div>
  );
};
