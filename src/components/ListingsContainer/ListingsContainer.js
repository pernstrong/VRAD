import React from "react";
// import PropTypes from "prop-types";
import "./ListingsContainer.css";
import ListingCard from "../ListingCard/ListingCard"
import { Route } from 'react-router-dom'

const ListingsContainer = (props) => {
  console.log(props)
  const listings = props.listings.map(listing => {
    return <ListingCard key={listing.listing_id} {...listing}/> 
  })

  return <section className="listings-container">{listings}</section>
};

export default ListingsContainer;

ListingsContainer.propTypes = {};
