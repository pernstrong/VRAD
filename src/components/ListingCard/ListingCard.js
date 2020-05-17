import React from "react";
// import PropTypes from "prop-types";
import "./ListingCard.css";
import { Link } from "react-router-dom";

const ListingCard = (props) => {
  const imagePath = `/images/${props.listing_id}_a.jpg`;
  return (
    <section className="listing-card">
      <h2>{props.name}</h2>
      <img className="listing-img" src={`${imagePath}`} alt={props.name} />

      <Link to={`/listings/${props.listing_id}`}>
        <button
          className="listing-details-btn"
          onClick={() => props.setCurrentListing(props.listing_id)}
        >
          Listing Details
        </button>
      </Link>
    </section>
  );
};

export default ListingCard;

ListingCard.propTypes = {};
