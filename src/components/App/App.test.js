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

  it('should render AreasContainer on successful sign in', async () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <App />
      </Router>
    )
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
    const rinoHeading = await waitFor(() => getByText('River North'))
    expect(rinoHeading).toBeInTheDocument()
  })
});
