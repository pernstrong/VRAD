import React from "react";
import "./AreasContainer.css";
import AreaCard from "../AreaCard/AreaCard";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const AreasContainer = (props) => {
  const areas = props.areas.map((area) => {
    return (
      <Route
        to={`/VRAD/areas/${area.id}`}
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

AreasContainer.propTypse = {
  areas: PropTypes.array.isRequired,
  setCurrentArea: PropTypes.func.isRequired,
};
