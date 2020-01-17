import React, { Component } from "react";

class Porfolio extends Component {
  render() {
    return (
      <div id="portfolio-section">
        <div className="narrow-content">
          <div className="row">
            <div className="col-lg-4 col-lg-offset-2 col-lg-pull-2 animated fadeInLeft">
              <span className="heading-meta">Portfolio</span>
              <h2 className="section-title animated fadeInleft">
                Recent Projects
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 animate-box animated fadeInLeft">
              <div
                className="project"
                style={{
                  backgroundImage: "url(images/snake_ladders_cover.png)"
                }}
              >
                {/* <img
                  className="img-thumbnail"
                  src="images/snake_ladders_cover.png"
                /> */}
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://snake_ladder_game.surge.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Snake & Ladder Addition Game
                      </a>
                    </h3>
                    <span className="icon_text">Game</span>
                    <p className="icon">
                      <span>
                        <a
                          href="https://snake_ladder_game.surge.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="icon_text">
                            Math Addition Game built with JavaScript, jQuery,
                            HTML, CSS, and various third-party APIs.
                          </p>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-box animated fadeInRight">
              <div
                className="project"
                style={{
                  backgroundImage: "url(https://i.imgur.com/3avQSsX.jpg)"
                }}
              >
                {/* <img
                  className="img-thumbnail"
                  src="https://i.imgur.com/3avQSsX.jpg"
                /> */}
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a
                        href="https://book-bag-app.herokuapp.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Bag App
                      </a>
                    </h3>
                    <span>Full Stack Web App</span>
                    <p className="icon">
                      <span>
                        <a
                          href="https://book-bag-app.herokuapp.com/home"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="icon_text">
                            An app for students and teacher to track reading
                            list. Built with EJS, bcrypt authentication,
                            MongoDB, Express - Node.js, using MVC framework.
                          </p>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12 animate-box animated fadeInLeft">
              <div
                className="project"
                style={{
                  backgroundImage: "url(https://i.imgur.com/cMJl9bW.png)"
                }}
              >
                {/* <img
                  className="img-thumbnail"
                  src="https://i.imgur.com/cMJl9bW.png"
                /> */}
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="http://medicalendar-app.surge.sh/auth">
                        MediCal
                      </a>
                    </h3>
                    <span>Full Stack Web App</span>
                    <p className="icon">
                      <span>
                        <a
                          href="http://medicalendar-app.surge.sh/auth"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="icon_text">
                            An app for patients and doctor to manage medical
                            appointments. Built with React.js, JWT
                            (authentication), MongoDB, Express - Node.js, using
                            MVC framework.
                          </p>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12 animate-box animated fadeInRight">
              <div
                className="project"
                style={{
                  backgroundImage: "url(https://i.imgur.com/25gKmFc.png)"
                }}
              >
                {/* <img
                  className="img-thumbnail"
                  src="https://i.imgur.com/25gKmFc.png"
                /> */}
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="https://vacay-ai.surge.sh/">Vacay Ai</a>
                    </h3>
                    <span>Full Stack App</span>
                    <p className="icon">
                      <span>
                        <a
                          href="https://vacay-ai.surge.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="icon_text">
                            An app for users to find dream vacation spots. Built
                            with React (front-end), and Progresql and Ruby on
                            Rails (back-end), using MVC framework.
                          </p>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12 animate-box animated fadeInLeft">
              <div
                className="project"
                style={{
                  backgroundImage: "url(https://i.imgur.com/P3bMw85.png)"
                }}
              >
                {/* <img
                  className="img-thumbnail"
                  src="https://i.imgur.com/P3bMw85.png"
                /> */}
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="http://bookmark-app-by-jj.surge.sh/">
                        Bookmark App
                      </a>
                    </h3>
                    <span>Full Stack App</span>
                    <p className="icon">
                      <span>
                        <a
                          href="https://bookmark-app-by-jj.surge.sh/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="icon_text">
                            An app for users to add/edit/delete bookmarks. Built
                            with React (front-end), MongoDB and Express -
                            Node.js (back-end), using MVC framework.
                          </p>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Porfolio;
