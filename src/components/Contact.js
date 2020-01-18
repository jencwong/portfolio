import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/jenniescwong@gmail.com"
        method="POST"
        className="form"
      >
        <div>
          <section className="site-section" id="contact-section">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-5 position-relative">
                  <h2 className="section-title text-center mb-5">
                    Contact Form
                  </h2>
                </div>
              </div>
              {/* <form action="#" className="form"> */}
              <div className="row mb-4">
                <div className="form-group col-6">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    className="form-control"
                    placeholder="First name"
                    // value={this.state.fname}
                    // onChange={e => this.setState({ fname: e.target.value })}
                  />
                </div>
                <div className="form-group col-6">
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    className="form-control"
                    placeholder="Last name"
                    // value={this.state.lname}
                    // onChange={e => this.setState({ lname: e.target.value })}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="form-group col-12">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    // value={this.state.email}
                    // onChange={e => this.setState({ email: e.target.value })}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="form-group col-12">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Subject of the message"
                    // value={this.state.subject}
                    // onChange={e => this.setState({ subject: e.target.subject })}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="form-group col-12">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Type your message here.."
                    // value={this.state.message}
                    // onChange={e => this.setState({ message: e.target.message })}
                  ></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  {status === "SUCCESS" ? (
                    <p>Thank you for contacting me!</p>
                  ) : (
                    <button className="btn btn-primary">Submit Message</button>
                  )}
                  {status === "ERROR" && <p>Ooops! There was an error.</p>}
                  {/* <input
                      type="submit"
                      className="btn btn-primary"
                      value="Send Message"
                    /> */}
                </div>
              </div>
              {/* </form> */}
            </div>
          </section>
        </div>
      </form>
    );
  }
}

export default Contact;
