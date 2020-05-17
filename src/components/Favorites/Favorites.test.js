import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Favorites from "./Favorites";

describe("Favorites", () => {
  afterEach(cleanup);

  it("should render message if user has no favorites", () => {
    const { getByText } = render(
      <Render>
        <Favorites />
      </Render>
    );
  });
});
