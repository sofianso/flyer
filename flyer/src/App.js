import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { BottomNavigation, ThemeProvider } from "@material-ui/core";

import "./styles.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { SignInOutContainer } from "./containers/SignInOutContainer";

import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Navbar />
        <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/login"
            render={(props) => <SignInOutContainer {...props} />}
          />
        </Switch>

        <div className="footer">
          <BottomNavigation position="static">
            <Footer />
          </BottomNavigation>
        </div>
      </div>
    </div>
  );
}
