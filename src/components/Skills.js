import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div id="skills-section">
        <section className="skills">
          <div className="narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animated fadeInLeft">
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 col-xs-12 text-center animated fadeInUp">
                <div className="services color-1">
                  <span className="icon-container">
                    <i>
                      <img
                        className="img-fluid"
                        src="images/mern-stack-logo.31f1258d.png"
                      />
                    </i>
                  </span>
                  <div className="desc">
                    <h3 className="desc_headline">Full Stack </h3>
                    <p className="desc_text">
                      Javascript, jQuery, React, HTML, CSS & UI libraries
                      (Bulma, Bootstrap, Material UI), Express on Node.js, Ruby
                      on Rails
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 text-center animated fadeInUp">
                <div className="services color-1">
                  <span className="icon-container">
                    <i>
                      <img className="img-fluid" src="images/analysis.png" />
                    </i>
                  </span>
                  <div className="desc">
                    <h3 className="desc_headline">Data Analysis</h3>
                    <p className="desc_text">
                      SQL, Postgresl, Mongo DB (Mongoose), Excel, Statistical
                      Analysis (including regression and hypothesis testing)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 text-center animated fadeInUp">
                <div className="services color-1">
                  <span className="icon-container">
                    <i>
                      <img
                        className="img-fluid"
                        src="images/investment_icon.png"
                      />
                    </i>
                  </span>
                  <div className="desc">
                    <h3 className="desc_headline">Financial Analysis</h3>
                    <p className="desc_text">
                      Balance Sheet, Income Statement, Cash Flow, and Ratio
                      Analysis, CAPM, WACC, and Securities and Asset Valuation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
