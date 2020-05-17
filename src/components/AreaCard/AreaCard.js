import React from "react";
import "./AreaCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AreaCard = (props) => {
  const { id, name, location, about } = props;
  return (
    <section className="area-card" data-id={id}>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>{about}</p>
      <Link to={`/areas/${id}`}>
        <button onClick={() => props.setCurrentArea(id)}>View Listings</button>
      </Link>
    </section>
  );
};

export default AreaCard;

AreaCard.propTypes = {
  setCurrentArea: PropTypes.func,
};
