import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Myform from "./components/Myform";
import Social from "./components/Social";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Myform />
        <Footer />
      </div>
    );
  }
}

export default App;
