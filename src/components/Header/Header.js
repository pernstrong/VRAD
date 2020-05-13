import React from "react";
// import PropTypes from "prop-types";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const userMessage = () => {
    return (
      <section className="message-section">
        <section className="guest-details">
          <h4>Guest Details</h4>
          <p>User: {props.user.name}</p>
          <p>Trip Purpose: {props.user.purpose}</p>
        </section>
        <section className="button-section">
          <Link to="/">
            <button onClick={() => props.resetUser()}>Sign Out</button>
          </Link>
          <button>My Favorites</button>
        </section>
      </section>
    );
  };

  return (
    <header>
      <h1>V.R.A.D.</h1>
      <p className="accronym">Vacation Rentals Around Denver</p>
      {props.user && <p className="welcome-message">Welcome to Denver</p>}
      {props.user && userMessage()}
    </header>
  );
};

export default Header;
