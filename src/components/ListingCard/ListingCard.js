import React from "react";
// import PropTypes from "prop-types";
import "./ListingCard.css";
import { Link } from 'react-router-dom'

const ListingCard = (props) => {
    return (
        <p>{props.name}</p>
        
    )
};

export default ListingCard;

ListingCard.propTypes = {};
