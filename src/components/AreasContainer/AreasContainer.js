import React from "react";
// import PropTypes from "prop-types";
import AreaCard from "../AreaCard/AreaCard";
import "./AreasContainer.css";
import { Route } from "react-router-dom";

const AreasContainer = (props) => {
  const areas = props.areas.map((area) => {
    return (
      <Route
        to={`/areas/${area.id}`}
        render={() => (
          <AreaCard {...area} setCurrentArea={props.setCurrentArea} />
        )}
        key={area.name}
      />
    );
  });
  return <section className="areas-container">{areas}</section>;
};

export default AreasContainer;

AreasContainer.propTypse = {};
