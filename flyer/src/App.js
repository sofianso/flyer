import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { BottomNavigation, ThemeProvider } from "@material-ui/core";
import { theme } from "./utils/theme";
import { SignInOutContainer } from "./containers/SignInOutContainer";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ThemeProvider theme={theme}>
            <Navbar />
          </ThemeProvider>
        </div>
        <BottomNavigation>
          <Footer />
        </BottomNavigation>
      </div>
    );
  }
}

export default App;
