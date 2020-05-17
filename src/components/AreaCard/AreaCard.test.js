import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AreaCard from "./AreaCard";

describe("AreaCard", () => {
  afterEach(cleanup);

  it("should render area cards and information", () => {
    const { getByText } = render(
      <Router>
        <AreaCard
          name={"River North"}
          location={"North of Downtown Denver"}
          about={
            "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time."
          }
        />
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

  it("should run setCurrentArea when View Listings button is clicked", () => {
    const mockSetCurrentArea = jest.fn();
    const { getByText } = render(
      <Router>
        <AreaCard setCurrentArea={mockSetCurrentArea} />
      </Router>
    );
    const viewListingsBtn = getByText("View Listings");
    fireEvent.click(viewListingsBtn);
    expect(mockSetCurrentArea).toHaveBeenCalledTimes(1);
  });
});
