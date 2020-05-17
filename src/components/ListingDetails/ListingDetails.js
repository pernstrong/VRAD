import React from "react";
// import PropTypes from "prop-types";
import "./ListingDetails.css";

const ListingDetails = (props) => {
  const { name, address, details } = props.details;
  const imagePathA = `/images/${props.details.listing_id}_a.jpg`;
  const imagePathB = `/images/${props.details.listing_id}_b.jpg`;
  const imagePathC = `/images/${props.details.listing_id}_c.jpg`;

  return (
    <section className="listing-details">
      <h2 className="listing-name">{name}</h2>
      <p className="listing-address">
        {address.street} {address.street}
      </p>
      <h3 className="listing-details">Details</h3>
      <p className="detail">Bedrooms: {details.beds}</p>
      <p className="detail">Bathrooms: {details.baths}</p>
      <p className="detail">Cost per Night: {details.cost_per_night}</p>
      <ul className="features">
        {details.features.map((feature) => {
          return <li className="feature">{feature}</li>;
        })}
      </ul>
      <img className="listing-img" src={`${imagePathA}`} alt={props.name} />
      <img className="listing-img" src={`${imagePathB}`} alt={props.name} />
      <img className="listing-img" src={`${imagePathC}`} alt={props.name} />
      <button
        className="favorites-btn"
        onClick={() => props.saveToFavorites(props.details.listing_id)}
      >
        Add to Favorites
      </button>
      <button
        onClick={() => props.removeFromFavorites(props.details.listing_id)}
      >
        Remove from Favorites
      </button>
    </section>
  );
};

export default ListingDetails;
