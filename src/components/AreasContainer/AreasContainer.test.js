import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AreasContainer from "./AreasContainer";

describe("AreaContainer", () => {
  afterEach(cleanup);

  it("should render AreasContainer", () => {
    const mockAreaDetails = [
      {
        shortname: "RiNo",
        id: 590,
        name: "River North",
        location: "North of Downtown Denver",
        about:
          "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time.",
        region_code: 6356834,
        quick_search: "o5kod9f5cqo0",
        listings: ["/api/v1/listings/3"],
      },
    ];
    const { getByText } = render(
      <Router>
        <AreasContainer areas={mockAreaDetails} />
      </Router>
    );
    const name = getByText("River North");
    const location = getByText("North of Downtown Denver");
    const about = getByText(
      "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time."
    );
    expect(name).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(about).toBeInTheDocument();
  });
});
