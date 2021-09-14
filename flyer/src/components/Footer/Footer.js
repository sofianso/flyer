import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  CssBaseline,
  Typography,
  makeStyles,
  Container,
  Grid,
  Box,
  withStyles,
} from "@material-ui/core";
import "./Footer.css";

import { Copyright } from "../Copyright/Copyright";

// var styleFooter = {
// position: "fixed",
// top: "200px",
// padding: "0px",
// margin: "0px",
// left: "0",
// width: "100%",
// fontSize: "1rem",
// };

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    Height: "100vh",
  },
  main: {
    // marginTop: theme.spacing(0),
    // marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: "orange",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer>
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          bgcolor="primary.main"
          color="white"
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Box borderBottom={1}>Help</Box>
                <Router>
                  <Box>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="/"
                      color="inherit"
                    >
                      Contact
                    </Link>
                  </Box>

                  <Box>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="/"
                      color="inherit"
                    >
                      About Us
                    </Link>
                  </Box>

                  <Box>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="/"
                      color="inherit"
                    >
                      Privacy
                    </Link>
                  </Box>

                  <Box>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="/"
                      color="inherit"
                    >
                      FAQs
                    </Link>
                  </Box>
                </Router>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box borderBottom={1}>Follow Us </Box>
                <Router>
                  <Box>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="/"
                      color="inherit"
                    >
                      Facebook
                    </Link>
                  </Box>

                  <Box>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="/"
                      color="inherit"
                    >
                      Instagram
                    </Link>
                  </Box>

                  <Box>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="/"
                      color="inherit"
                    >
                      Twitter
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      style={{ textDecoration: "none" }}
                      href="/"
                      color="inherit"
                    >
                      LinkedIn
                    </Link>
                  </Box>
                </Router>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
            >
              {" "}
              Flyer Corp &reg; {new Date().getFullYear()}{" "}
            </Box>
          </Container>
        </Box>
      </footer>
    </div>
  );
};
