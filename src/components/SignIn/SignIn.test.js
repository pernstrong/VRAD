import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import SignIn from "./SignIn";

describe("SignIn", () => {
  it("displays a welcome message", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
    expect(getByText("Welcome, please sign in!")).toBeInTheDocument();
  });
});

/* Lauren thinking...
Passed one test. Wondering if additional display tests should live in this it block / if these display tests are necessary. 
Next tests that I would add to this file would be fireEvent tests that check handleChange and handleClick functionality
*/

module3/vrad/public/images/3_a.jpg
/Users/laurenlucero/Turing/module3/vrad/public/images/3_a.jpg