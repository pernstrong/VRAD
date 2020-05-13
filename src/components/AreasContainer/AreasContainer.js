import React from "react";
// import PropTypes from "prop-types";
import AreaCard from "../AreaCard/AreaCard";
import "./AreasContainer.css";

const AreasContainer = (props) => {
  const areas = props.areas.map((area) => {
    return <AreaCard key={area.name} {...area} />;
  });

  return <section className="areas-container">{areas}</section>;
};

export default AreasContainer;

AreasContainer.propTypse = {};
