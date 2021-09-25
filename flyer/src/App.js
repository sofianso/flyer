import React, { useState } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import memberships from "./api/memberships";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import Membership from "./components/Membership/Membership";
import { SignInOutContainer } from "./containers/SignInOutContainer";
import { Footer } from "./components/Footer/Footer";

// Stripe Payment
import { loadStripe } from "@stripe/stripe-js";

import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "./pages/Profile";
import { Height } from "@material-ui/icons";
import { Signup } from "./pages/Signup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    minHeight: "100vh",
  },
  footerContainer: {
    backgroundColor: "blue",
    bottom: 0,
    position: "static",
    height: "2.5rem",
  },
}));

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
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
            path="/membership"
            render={(props) => <Membership {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} />}
          />

          <Route
            exact
            path="/login"
            render={(props) => <SignInOutContainer {...props} />}
          />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />
        </Switch>
      </div>
      <div className={classes.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}
