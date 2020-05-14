import React from "react";
// import PropTypes from "prop-types";
import "./ListingDetails.css";

const ListingDetails = (props) => {
  console.log(props);

  const { name, address, details } = props.details;
  const imagePathA = `/images/${props.details.listing_id}_a.jpg`;
  const imagePathB = `/images/${props.details.listing_id}_b.jpg`;
  const imagePathC = `/images/${props.details.listing_id}_c.jpg`;
  
  return (
    <section>
      <h2>{name}</h2>
      <p>
        {address.street} {address.street}
      </p>
      <h3>Details</h3>
      <p>Bedrooms: {details.beds}</p>
      <p>Bathrooms: {details.baths}</p>
      <p>Cost per Night: {details.cost_per_night}</p>
      <ul>
        {details.features.map((feature) => {
          return <li>{feature}</li>;
        })}
      </ul>
      <img src={`${imagePathA}`} alt={props.name} />
      <img src={`${imagePathB}`} alt={props.name} />
      <img src={`${imagePathC}`} alt={props.name} />
      <button>Favorite</button>
    </section>
  );
};

export default ListingDetails;
