import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from "@material-ui/core";
import React from "react";
// import HiUserAdd from "@material-ui/icons/HiUserAdd";

export const SignupForm = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };

  const headerStyle = { margin: 0 };

  const avatarStyle = { backgroundColor: "#f50057" };

  const genderLegend = {
    marginTop: "20px",
    fontWeight: "bold",
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>{/* <HiUserAdd /> */}</Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>

        <form>
          <TextField fullWidth label="First Name"></TextField>
          <TextField fullWidth label="Last Name"></TextField>
          <FormControl component="fieldset" style={genderLegend}>
            <FormLabel component="legend" style={genderLegend}>
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Phone Number"></TextField>
          <TextField fullWidth label="Password"></TextField>
          <TextField fullWidth label="Confirm Password"></TextField>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="I agree to terms and conditions"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
