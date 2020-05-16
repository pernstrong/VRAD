import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      purpose: "",
      errorMsg: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    this.checkInputs()
      ? this.props.setUser({
          name: this.state.name,
          email: this.state.email,
          purpose: this.state.purpose,
        })
      : this.setState({ errorMsg: <p>Please fill in all inputs.</p> });
  };

  checkInputs = () => {
    return (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.purpose !== ""
    );
  };

  render() {
    return (
      <section className="signIn-form">
        <h2>Welcome, please sign in!</h2>
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Enter your email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Your email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <label htmlFor="purpose">Why are you visiting?</label>
        <select name="purpose" id="purpose" onChange={this.handleChange}>
          <option value="">-- Please choose a purpose --</option>
          <option value="business">Business</option>
          <option value="vacation">Vacation</option>
          <option value="fugitive">Fugitive on the Run</option>
        </select>
        {this.state.errorMsg}
        <Link to={this.checkInputs() ? "/areas" : "/"}>
          <button className="signIn-btn" onClick={this.handleClick}>
            Sign In
          </button>
        </Link>
      </section>
    );
  }
}

export default SignIn;

SignIn.propTypes = {};
