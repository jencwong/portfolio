import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="site-blocks-cover overlay bg-light" id="home-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mt-lg-5 text-left align-self-center text-intro">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="text-black">Hi, I'm Jennie Wong</h1>
                  <p className="lead">A Full Stack Developer</p>
                  <p>
                    <a
                      href="#portfolio-section"
                      className="btn smoothscroll btn-primary"
                    >
                      Portfolio
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/img_bg_sepia.jpg"
            alt="Image"
            className="img-face"
            // data-aos="fade"
          ></img>
        </div>
      </div>
    );
  }
}

export default Home;
