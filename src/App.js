import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div id="fill" className="container ">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
