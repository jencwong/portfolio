import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header
        className="site-navbar py-4 js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <a href="#home-section" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about-section" className="nav-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio-section" className="nav-link">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-left">
              <nav
                className="site-navigation position-relative"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <a href="https://drive.google.com/file/d/1g1JA5zZjwXsiGl7C86VvPSjGCcD_gWNl/view?usp=sharing">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a href="#skills-section" className="nav-link">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              <div
                className="d-inline-block d-lg-none"
                style={{ position: "relative", top: "3px" }}
              >
                <a
                  href="#"
                  className="site-menu-toggle js-menu-toggle float-right"
                >
                  <span className="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
