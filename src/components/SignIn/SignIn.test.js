import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignIn from "./SignIn";

describe("SignIn", () => {
  afterEach(cleanup);

  it("should render sign in form", () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <SignIn />
      </Router>
    );
    expect(getByText("Welcome, please sign in!")).toBeInTheDocument();
    expect(getByLabelText("Enter your name:")).toBeInTheDocument();
    expect(getByLabelText("Enter your email:")).toBeInTheDocument();
    expect(getByLabelText("Why are you visiting?")).toBeInTheDocument();
  });

  it("should render error message if missing input", () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <SignIn />
      </Router>
    );
    fireEvent.change(getByPlaceholderText("Your name"), {
      target: { value: "" },
    });
    fireEvent.change(getByPlaceholderText("Your email"), {
      target: { value: "" },
    });
    fireEvent.change(getByLabelText("Why are you visiting?"), {
      target: { value: "Business" },
    });
    fireEvent.click(getByText("Sign In"));
    expect(getByText("Please fill in all inputs.")).toBeInTheDocument();
  });

  it("should run setUser if all inputs are filled in", () => {
    const mockSetUser = jest.fn();
    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <Router>
        <SignIn setUser={mockSetUser} />
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
    expect(mockSetUser).toHaveBeenCalledTimes(1);
    expect(mockSetUser).toHaveBeenCalledWith({
      name: "Foxy Meatball",
      email: "foxymeatball@aol.com",
      purpose: "vacation",
    });
  });
});
