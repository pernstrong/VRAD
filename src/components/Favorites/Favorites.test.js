import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Favorites from "./Favorites";

describe("Favorites", () => {
  afterEach(cleanup);

  it("should render message in Favorites if user has no favorite listings", () => {
    const mockFavorites = [];
    const { getByText } = render(
      <Router>
        <Favorites favorites={mockFavorites} />
      </Router>
    );
    expect(getByText("My Favorites")).toBeInTheDocument();
    expect(
      getByText("You have no favorites yet. Favorite a listing!")
    ).toBeInTheDocument();
  });

  it("should render ListingCard for saved favorites", () => {
    const mockFavorites = [
      {
        listing_id: 3,
        area_id: 590,
        name: "Hip RiNo Party Spot",
        address: {
          street: "2250 Lawrence St",
          zip: "80205",
        },
        details: {
          neighborhood_id: 5124122,
          superhost: true,
          seller_source: "91jss1",
          beds: 3,
          baths: 2.5,
          cost_per_night: 420,
          features: ["hot tub", "espresso machine"],
        },
        dev_id: "u4gh2j",
        area: "rino",
        db_connect: 834470,
      },
    ];
    const { getByText } = render(
      <Router>
        <Favorites favorites={mockFavorites} />
      </Router>
    );
    const listingHeading = getByText("Hip RiNo Party Spot");
    const listingDetailsBtn = getByText("Listing Details");
    expect(listingHeading).toBeInTheDocument();
    expect(listingDetailsBtn).toBeInTheDocument();
  });
});
