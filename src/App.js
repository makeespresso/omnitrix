import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import Landing from "./components/Landing";
import Info from "./components/Info";
import OurProducts from "./components/OurProducts";
import Map from "./components/Map";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      <div className="App center dirDown">
        <Navbar />
        <Carousel />
        {/* <Landing /> */}
        <Info />
        <OurProducts />
        <Map />
        <Contact />
      </div>
    );
  }
}