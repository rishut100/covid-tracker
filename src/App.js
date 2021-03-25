import React, { Component } from "react";
import CovidCases from "./Components/CovidCases.js";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Followme from "./Components/Followme";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CovidCases />
        <Followme />
        <Footer />
      </div>
    );
  }
}
