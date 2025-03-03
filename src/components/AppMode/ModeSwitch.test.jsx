import { render, screen } from "@testing-library/react";

import ModeSwitch from "./ModeSwitch";
import React from "react";

describe("ModeSwitch", () => {
  test("renders heading", async () => {
    render(<ModeSwitch />);

    const buttonElement = screen.queryByRole("button");

    // Expect the button to be absent
    expect(buttonElement).not.toBeInTheDocument();
  });

  // test("renders a list of users", async () => {
  //   render(<Users />);
  //   const users = await screen.findAllByRole("listitem");
  //   expect(users).toHaveLength(2);
  // });
});