// import React from "react";
// import { useForm } from "@formcarry/react";

// function MyFormcarry() {
//   // Call the `useForm` hook in your function component
//   const {state, submit} = useForm({
//     id: "-lDomvBMNt_"
//   });
//   // Success message
//   if (state.submitted) {
//     return <div>Thank you! We received your submission.</div>;
//   }
//   return (
//     <form onSubmit={submit}>

//         <button type=“submit”>Send</button>
//     </form>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

function MyForm() {
  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    firstname: val => !!val, //required
    lastname: val => !!val,
    subject: val => !!val,
    email: val =>
      val && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
    message: val => !!val
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };

  // Input Change Handling
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    email: "",
    message: ""
  });
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);
  /* End new validation ^^^^ */

  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  //   Server State Handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        firstname: "",
        lastname: "",
        subject: "",
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/moqeenw",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks for contacting!");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <div className="form">
      <section className="site-section" id="contact-section">
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5 position-relative">
              <h2 className="section-title text-center mb-5">Contact Form</h2>
            </div>
          </div>

          <form onSubmit={handleOnSubmit} noValidate>
            <div className="row mb-4">
              <div className="form-group col-6">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="form-control"
                  placeholder="First name"
                  onChange={handleOnChange}
                  value={inputs.firstname}
                  // onChange={e => this.setState({ fname: e.target.value })}
                />
              </div>
              <div className="form-group col-6">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  placeholder="Last name"
                  onChange={handleOnChange}
                  value={inputs.lastname}
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
                  className={fieldErrors.email ? "error" : ""}
                  placeholder="Email address"
                  onChange={handleOnChange}
                  value={inputs.email}
                  // value={this.state.email}
                  // onChange={e => this.setState({ email: e.target.value })}
                />
                {renderFieldError("email")}
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
                  onChange={handleOnChange}
                  value={inputs.subject}
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
                  onChange={handleOnChange}
                  value={inputs.message}
                  // value={this.state.message}
                  // onChange={e => this.setState({ message: e.target.message })}
                ></textarea>
                {renderFieldError("message")}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={serverState.submitting}
                >
                  Submit
                </button>
                {serverState.status && (
                  <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                  </p>
                )}

                {/* {status === "SUCCESS" ? (
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
          </form>
        </div>
      </section>
    </div>
  );
}

export default MyForm;
