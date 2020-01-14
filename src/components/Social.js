import React, { Component } from "react";
import SocialMediaIcons from "react-social-media-icons";

class Social extends Component {
  render() {
    return (
      <div>
        <div className="social-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div className="social-link-warp">
                  <div className="social-links">
                    <a href="">
                      <i className="fa-pinterest"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                  <h2 className="hidden-md hidden-sm">My Social Profiles</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
