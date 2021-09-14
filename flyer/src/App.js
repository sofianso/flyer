import React, { useState } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import memberships from "./api/memberships";
import Membership from "./components/Membership/Membership";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import Home from "./pages/Home";

import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { BottomNavigation } from "@material-ui/core";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { SignInOutContainer } from "./containers/SignInOutContainer";

// Stripe Payment
import { loadStripe } from "@stripe/stripe-js";

import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles({});

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

export default function App() {
  const navbar = useStyles();
  return (
    <div>
      <div className={navbar.container}>
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
            path="/login"
            render={(props) => <SignInOutContainer {...props} />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
