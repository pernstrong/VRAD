import React from "react";
// import PropTypes from "prop-types";
import "./AreaCard.css";
import { Link } from 'react-router-dom'

const AreaCard = (props) => {
  const { id, name, location, about } = props
  return (
    <section className="area-card" data-id={id}>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>{about}</p>
      <Link to={`/listings/${id}`} >
         <button onClick={() => props.setCurrentArea(id)}>View Listings</button>
      </Link>
    </section>
  );
};

export default AreaCard;

AreaCard.propTypes = {};
