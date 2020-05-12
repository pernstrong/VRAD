import React from "react";
import PropTypes from "prop-types";
import "./AreaCard.css";

const AreaCard = ({ id, name, location, about }) => {
  return (
    <section className="area-card" data-id={id}>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>{about}</p>
      <button>View Listings</button>
    </section>
  );
};

export default AreaCard;

AreaCard.propTypes = {};
