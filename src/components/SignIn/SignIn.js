import React from "react";
import "./SignIn.css";
// import PropTypes from "prop-types";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      purpose: "",
      error: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    console.log(this.state);
    console.log(this.handleInputError());
    this.handleInputError()
      ? this.props.setUser({
          name: this.state.name,
          email: this.state.email,
          purpose: this.state.purpose,
        })
      : this.setState({ error: true });
  };

  handleInputError = () => {
    return (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.purpose !== ""
    );
  };

  render() {
    return (
      <section className="signIn-form">
        <h2>Welcome, please sign in:</h2>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Enter your email</label>
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
        {this.state.error && <p>Please fill out all inputs to sign in.</p>}
        <button className="signIn-btn" onClick={this.handleClick}>
          Sign In
        </button>
      </section>
    );
  }
}

export default SignIn;

SignIn.propTypes = {};
