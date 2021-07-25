import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders output text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Output/i);
  expect(linkElement).toBeInTheDocument();
});
