import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="site-section" id="about-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 mb-4 position-relative">
              <h2 className="section-title">About Me</h2>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
              <img
                src="images/jwong_19_headshot_burned.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 order-2 order-lg-1">
              <p>
                I am an investment analyst turned full-stack software developer.
                I love solving problems and building applications. My background
                in analyzing complex financial situations taught me to be
                resourcefuld and innovative, while my positive can-do attitude
                helps me persevere under pressure. I am excited to begin this
                journey as a full fledged programmer.
              </p>
            </div>
            <div className="col-lg-4 order-3 order-lg-3">
              <p>
                I was interested in developing apps after watching my children
                play games on their iPads. I started learning Python and C on my
                own and before I knew it, I caught the coding bug! I recently
                completed the Software Engineering Immersive Program with
                General Assembly where I spent 80-hours a week for 13-weeks
                expanding my technical toolkits with a focus on MERN stack
                (MongoDB, Express, React.js, Node.js).
              </p>

              <p>
                <a
                  href="#skills-section"
                  className="btn smoothscroll btn-primary"
                >
                  Key Skills
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
