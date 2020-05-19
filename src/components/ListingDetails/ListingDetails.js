import React from "react";
import PropTypes from "prop-types";
import "./ListingDetails.css";

const ListingDetails = (props) => {
  const { name, address, details } = props.details;
  const imagePathA = `/images/${props.details.listing_id}_a.jpg`;
  const imagePathB = `/images/${props.details.listing_id}_b.jpg`;
  const imagePathC = `/images/${props.details.listing_id}_c.jpg`;

  return (
    <section className="listing-details">
    <div className="details-header">
    <div className="name-address">
      <h2 className="listing-name">{name}</h2>
      <p className="listing-address">
        {address.street} {address.street}
      </p>
      </div>
      <button
        className="favorites-btn"
        onClick={() =>
          props.favoriteIds.includes(props.details.listing_id)
            ? props.removeFromFavorites(props.details.listing_id)
            : props.saveToFavorites(props.details.listing_id)
        }
      >
        {props.favoriteIds.includes(props.details.listing_id)
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </button>
      </div>
      <div className="details">
      <h3>Details</h3>
      <p className="detail">Bedrooms: {details.beds}</p>
      <p className="detail">Bathrooms: {details.baths}</p>
      <p className="detail">Cost per Night: ${details.cost_per_night}</p>
      </div>
      <div className="features">
      <h4>Features</h4>
      <ul className="features">
        {details.features.map((feature) => {
          return (
            <li className="feature" key={feature}>
              {feature}
            </li>
          );
        })}
      </ul>
      </div>
      <div className="images">
        <img className="listing-img" src={`${imagePathA}`} alt={props.name} />
        <img className="listing-img" src={`${imagePathB}`} alt={props.name} />
        <img className="listing-img" src={`${imagePathC}`} alt={props.name} />
      </div>
    </section>
  );
};

export default ListingDetails;

ListingDetails.propTypes = {
  details: PropTypes.object,
  saveToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
};
