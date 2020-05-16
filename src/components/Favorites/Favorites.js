import React from "react";
import ListingCard from "../ListingCard/ListingCard"
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Favorites.css";

const Favorites = (props) => {
  const favorites = props.favorites.map(listing => {
    return <ListingCard key={listing.listing_id} {...listing} setCurrentListing={props.setCurrentListing}/> 
  })
  return (<section className="favorites-container">
  <h2>My Favorites</h2>
  {props.favorites.length === 0 && <p>You have no favorites yet. Favorite a listing!</p>}
  {favorites}
  <Link to="/areas">
  <button>Return to Listings</button>
  </Link>
  </section>)
};

export default Favorites;

Favorites.propTypes = {};
