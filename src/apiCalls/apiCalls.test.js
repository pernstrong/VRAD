import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/";
import App from "../components/App/App";
import { fetchAreasData, fetchListingsData } from "./apiCalls";

jest.mock("./apiCalls.js");

describe("apiCalls", () => {
  it("should fetch areas data when App loads", async () => {
    const mockAreaDetails1 = {
      shortname: "RiNo",
      id: 590,
      name: "River North",
      location: "North of Downtown Denver",
      about:
        "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time.",
      region_code: 6356834,
      quick_search: "o5kod9f5cqo0",
      listings: ["/api/v1/listings/3"],
    };
    const mockAreaDetails2 = {
      id: 751,
      name: "Park Hill",
      location: "East of Downtown Denver",
      about:
        "Park Hill features one of the best views of the downtown area and surrounding mountains.",
      region_code: 6648386,
      quick_search: "g1m0tsxzl0o0",
      listings: [
        "/api/v1/listings/3921",
        "/api/v1/listings/56",
        "/api/v1/listings/21",
      ],
    };
    fetchAreasData.mockResolvedValue([mockAreaDetails1, mockAreaDetails2]);
    fetchListingsData.mockResolvedValue();
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <App />
      </Router>
    );
    fireEvent.change(getByPlaceholderText("Your name"), {
      target: { value: "Foxy Meatball" },
    });
    fireEvent.change(getByPlaceholderText("Your email"), {
      target: { value: "foxymeatball@aol.com" },
    });
    fireEvent.change(getByLabelText("Why are you visiting?"), {
      target: { value: "vacation" },
    });
    fireEvent.click(getByText("Sign In"));
    const rinoHeading = await waitFor(() => getByText("River North"));
    expect(rinoHeading).toBeInTheDocument();
    const parkHillHeading = await waitFor(() => getByText("Park Hill"));
    expect(parkHillHeading).toBeInTheDocument();
  });

  it("should fetch listings data when user signs in", async () => {
    const mockAreaDetails1 = {
      shortname: "RiNo",
      id: 590,
      name: "River North",
      location: "North of Downtown Denver",
      about:
        "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time.",
      region_code: 6356834,
      quick_search: "o5kod9f5cqo0",
      listings: ["/api/v1/listings/3"],
    };
    const mockAreaDetails2 = {
      id: 751,
      name: "Park Hill",
      location: "East of Downtown Denver",
      about:
        "Park Hill features one of the best views of the downtown area and surrounding mountains.",
      region_code: 6648386,
      quick_search: "g1m0tsxzl0o0",
      listings: [
        "/api/v1/listings/3921",
        "/api/v1/listings/56",
        "/api/v1/listings/21",
      ],
    };
    const mockListingDetails1 = {
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
    };
    const mockListingDetails2 = {
      listing_id: 44,
      area_id: 590,
      name: "Lowkey Industrial Chic",
      address: {
        street: "2441 Broadway Ave",
        zip: "80205",
      },
      details: {
        neighborhood_id: 5124122,
        superhost: true,
        seller_source: "91jss1",
        beds: 1,
        baths: 1.5,
        cost_per_night: 220,
        features: ["city views", "industrial motif", "rooftop"],
      },
      dev_id: "jaenku",
      area: "rino",
      db_connect: 694530,
    };
    fetchAreasData.mockResolvedValueOnce([mockAreaDetails1, mockAreaDetails2]);
    fetchListingsData.mockResolvedValueOnce({listings: [
      mockListingDetails1,
      mockListingDetails2,
    ]});
    const {
      getByText,
      getAllByText,
      getByLabelText,
      getByPlaceholderText,
    } = render(
      <Router>
        <App />
      </Router>
    );
    fireEvent.change(getByPlaceholderText("Your name"), {
      target: { value: "Foxy Meatball" },
    });
    fireEvent.change(getByPlaceholderText("Your email"), {
      target: { value: "foxymeatball@aol.com" },
    });
    fireEvent.change(getByLabelText("Why are you visiting?"), {
      target: { value: "vacation" },
    });
    fireEvent.click(getByText("Sign In"));
    const viewListingBtns = await waitFor(() => getAllByText("View Listings"));
    fireEvent.click(viewListingBtns[0]);
    const listingHeading1 = await waitFor(() => getByText("Hip RiNo Party Spot"))
    expect(listingHeading1).toBeInTheDocument();
  });
});
