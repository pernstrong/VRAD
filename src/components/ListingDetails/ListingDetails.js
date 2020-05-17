import React from "react";
import PropTypes from "prop-types";
import "./ListingDetails.css";

const ListingDetails = (props) => {
  const { name, address, details } = props.details;
  const imagePathA = `/images/${props.details.listing_id}_a.jpg`;
  const imagePathB = `/images/${props.details.listing_id}_b.jpg`;
  const imagePathC = `/images/${props.details.listing_id}_c.jpg`;

  return (
    <section>
      <h2>{name}</h2>
      <p>
        {address.street} {address.zip} Denver, CO
      </p>
      <h3>Details</h3>
      <p>Bedrooms: {details.beds}</p>
      <p>Bathrooms: {details.baths}</p>
      <p>Cost per Night: ${details.cost_per_night}</p>
      <ul>
        {details.features.map((feature) => {
          return (
            <li key={feature}>{feature} </li>);
        })}
      </ul>
      <img src={`${imagePathA}`} alt={props.name} />
      <img src={`${imagePathB}`} alt={props.name} />
      <img src={`${imagePathC}`} alt={props.name} />
      <button onClick={() => props.saveToFavorites(props.details.listing_id)}>
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

ListingDetails.propTypes = {
  details: PropTypes.object,
  saveToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func
};


