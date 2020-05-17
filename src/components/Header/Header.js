import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink to="/favorites" className='my-favorites-nav-link'>
            <button className='my-favorites-button'>
            My Favorites ({props.numberOfFavorites})
            </button>
          </NavLink>
        </section>
      </section>
    );
  };

  return (
    <header>
      <Link to="/areas">
        <h1>V.R.A.D.</h1>
      </Link>
      <p className="accronym">Vacation Rentals Around Denver</p>
      {props.user && <p className="welcome-message">Welcome to Denver</p>}
      {props.user && userMessage()}
    </header>
  );
};

export default Header;

Header.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  resetUser: PropTypes.func,
  numberOfFavorites: PropTypes.number
}