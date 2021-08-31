import React from "react";
import { Paper, Tabs, Tab, Typography, Box } from "@material-ui/core";
import { LoginForm } from "../components/accountBox/LoginForm";
import { SignupForm } from "../components/accountBox/SignupForm";

export const SignInOutContainer = () => {
  const paperStyle = { width: 340, margin: "20px auto" };

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation="20" style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Login" />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LoginForm handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignupForm />
      </TabPanel>
    </Paper>
  );
};
