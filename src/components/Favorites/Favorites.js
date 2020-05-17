import React from "react";
import "./Favorites.css";
import ListingCard from "../ListingCard/ListingCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Favorites = (props) => {
  const favorites = props.favorites.map((listing) => {
    return (
      <ListingCard
        key={listing.listing_id}
        {...listing}
        setCurrentListing={props.setCurrentListing}
      />
    );
  });
  return (
    <section className="favorites-container">
      <h2>My Favorites</h2>
      {props.favorites.length === 0 && (
        <p>You have no favorites yet. Favorite a listing!</p>
      )}
      {favorites}
      <Link to="/areas">
        <button>Return to Areas</button>
      </Link>
    </section>
  );
};

export default Favorites;

Favorites.propTypes = {
  listings: PropTypes.array.isRequired,
  setCurrentListing: PropTypes.func.isRequired,
};
