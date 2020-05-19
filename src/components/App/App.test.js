import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  it("should render Header", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByText("V.R.A.D.")).toBeInTheDocument();
  });

  it("should render SignIn", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByText("Welcome, please sign in!")).toBeInTheDocument();
  });

  it("should render AreasContainer on successful sign in", async () => {
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
  });

  it("should render ListingDetails on Listing Details button click", async () => {
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
    const viewListingsBtns = await waitFor(() => getAllByText("View Listings"));
    fireEvent.click(viewListingsBtns[0]);
    const listingDetailsBtns = getAllByText("Listing Details");
    fireEvent.click(listingDetailsBtns[0]);
    expect(getByText("Cost per Night: $420")).toBeInTheDocument();
  });

  it("should render user favorites on My Favorites button click", async () => {
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
    const viewListingsBtns = await waitFor(() => getAllByText("View Listings"));
    fireEvent.click(viewListingsBtns[0]);
    const listingDetailsBtns = getAllByText("Listing Details");
    fireEvent.click(listingDetailsBtns[0]);
    const addToFavoritesBtn = getByText("Add to Favorites");
    fireEvent.click(addToFavoritesBtn);
    const myFavoritesBtn = getByText("My Favorites (1)");
    fireEvent.click(myFavoritesBtn);
    expect(getByText("Hip RiNo Party Spot")).toBeInTheDocument();
  });

  it("should update Favorites on Remove from Favorites click", async () => {
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
    const viewListingsBtns = await waitFor(() => getAllByText("View Listings"));
    fireEvent.click(viewListingsBtns[0]);
    const listingDetailsBtns = getAllByText("Listing Details");
    fireEvent.click(listingDetailsBtns[0]);
    const addToFavoritesBtn = getByText("Add to Favorites");
    fireEvent.click(addToFavoritesBtn);
    const removeFromFavoritesBtn = await waitFor(() =>
      getByText("Remove from Favorites")
    );
    fireEvent.click(removeFromFavoritesBtn);
    const myFavoritesBtn = getByText("My Favorites (0)");
    fireEvent.click(myFavoritesBtn);
    expect(
      getByText("You have no favorites yet. Favorite a listing!")
    ).toBeInTheDocument();
  });

  // it("should return to AreasContainer on Return to Areas click", async () => {
  //   const { getByText, getByLabelText, getByPlaceholderText } = render(
  //     <Router>
  //       <App />
  //     </Router>
  //   );
  //   fireEvent.change(getByPlaceholderText("Your name"), {
  //     target: { value: "Foxy Meatball" },
  //   });
  //   fireEvent.change(getByPlaceholderText("Your email"), {
  //     target: { value: "foxymeatball@aol.com" },
  //   });
  //   fireEvent.change(getByLabelText("Why are you visiting?"), {
  //     target: { value: "vacation" },
  //   });
  //   fireEvent.click(getByText("Sign In"));
  //   fireEvent.click(getByText("My Favorites (0)"));
  //   fireEvent.click(getByText("Return to Areas"));
  //   expect(getByText("River North")).toBeInTheDocument();
  // });
});
