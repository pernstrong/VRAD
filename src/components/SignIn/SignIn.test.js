import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import SignIn from "./SignIn";
import "@testing-library/jest-dom/extend-expect";

describe("SignIn", () => {
  it("should render sign in form", () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    expect(getByText("Welcome, please sign in!")).toBeInTheDocument();
    expect(getByLabelText("Enter your name:")).toBeInTheDocument();
    expect(getByLabelText("Enter your email:")).toBeInTheDocument();
    expect(getByLabelText("Why are you visiting?")).toBeInTheDocument();
  });

  it("should render error message if missing input", () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
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
      <MemoryRouter>
        <SignIn setUser={mockSetUser} />
      </MemoryRouter>
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
