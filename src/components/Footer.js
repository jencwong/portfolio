import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-4 text-left">
                <h3 className="footer-title">My Social Profiles:</h3>
                <a href="https://www.linkedin.com/in/jennie-s-c-wong/">
                  <span className="social-icons">
                    <i className="icon-linkedin"></i>
                  </span>
                </a>
                <a href="https://github.com/jencwong">
                  <i className="social-icons icon-github"></i>
                </a>
                <a href="https://twitter.com/Mominct2">
                  <i className="social-icons icon-twitter"></i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <p>
                  Icons made by{" "}
                  <a
                    href="https://www.flaticon.com/authors/eucalyp"
                    title="Eucalyp"
                  >
                    Eucalyp
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    {" "}
                    www.flaticon.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
