import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./utils/theme";
class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Footer />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
