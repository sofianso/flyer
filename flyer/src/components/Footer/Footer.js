import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

var styleFooter = {
  position: "fixed",
  top: "200px",
  padding: "0px",
  margin: "0px",
  left: "0",
  width: "100%",
  fontSize: "1rem",
};

export const Footer = () => {
  return (
    <div>
      <div style={styleFooter}>
        <footer>
          <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor="text.secondary"
            color="white"
          >
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box borderBottom={1}>Help</Box>
                  <Router>
                    <Box>
                      <Link href="/" color="inherit">
                        Contact
                      </Link>
                    </Box>

                    <Box>
                      <Link href="/" color="inherit">
                        About Us
                      </Link>
                    </Box>

                    <Box>
                      <Link href="/" color="inherit">
                        Privacy
                      </Link>
                    </Box>

                    <Box>
                      <Link href="/" color="inherit">
                        FAQs
                      </Link>
                    </Box>
                  </Router>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box borderBottom={1}>Follow Us </Box>
                  <Router>
                    <Box>
                      <Link href="/" color="inherit">
                        Facebook
                      </Link>
                    </Box>

                    <Box>
                      <Link href="/" color="inherit">
                        Instagram
                      </Link>
                    </Box>

                    <Box>
                      <Link href="/" color="inherit">
                        Twitter
                      </Link>
                    </Box>
                    <Box>
                      <Link href="/" color="inherit">
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
    </div>
  );
};
