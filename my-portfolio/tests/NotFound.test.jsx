// tests/NotFound.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../src/pages/NotFound";

test("404 page shows message and has a link to home", () => {
  render(<MemoryRouter><NotFound/></MemoryRouter>);
  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /return home/i })).toBeInTheDocument();
});
