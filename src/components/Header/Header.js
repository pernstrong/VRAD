import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const userMessage = () => {
    return (
      <section className="message-section">
        <section className="guest-details">
          <h3>Guest Details</h3>
          <p>User: {props.user.name}</p>
          <p>Trip Purpose: {props.user.purpose}</p>
        </section>
        <section className="button-section">
          <NavLink to="/favorites" activeClassName='my-favorites-button-active'>
            <button className='my-favorites-button'>
            My Favorites ({props.numberOfFavorites})
            </button>
          </NavLink>
          <Link to="/">
            <button onClick={() => props.resetUser()}>Sign Out</button>
          </Link>
        </section>
      </section>
    );
  };

  return (
    <header>
      {/* <Link to="/areas"> */}
        <h1>V.R.A.D.</h1>
      {/* </Link> */}
      <p className="acronym">Vacation Rentals Around Denver</p>
      {props.user && <h2 className="welcome-message">Welcome to Denver!</h2>}
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