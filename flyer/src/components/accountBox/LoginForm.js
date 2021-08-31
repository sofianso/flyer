import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  FormControlLabel,
  Typography,
  TextField,
  Checkbox,
  Link,
} from "@material-ui/core";
// import FaUserCircle from "react-icons/lib/fa";

export const LoginForm = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };

  const avatarStyle = {
    backgroundColor: "blue",
  };

  const btnStyle = {
    margin: "5px auto",
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>{/* <FaUserCircle /> */}</Avatar>
          <h2>Login</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter your email"
          fullWidth
          required
        ></TextField>
        <TextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          fullWidth
          required
        ></TextField>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button variant="contained" color="primary" style={btnStyle} fullWidth>
          Login
        </Button>
        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          Want to create an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
