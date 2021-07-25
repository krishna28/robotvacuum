import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

import Directions from "./util/LinkedList";

describe("Testing UI elements for robot vacuum app", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders output text", () => {
    const linkElement = screen.getByText(/Output/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("The initial x and y is set to empty", () => {
    expect(screen.getByTestId("x")).toBeEmptyDOMElement();
    expect(screen.getByTestId("y")).toBeEmptyDOMElement();
  });
  it("No event should trigger if x and y is not set", async () => {
    await userEvent.click(screen.getByTestId("place"));
    expect(screen.getByText(/Output: ,,NORTH/i)).toBeInTheDocument();
  });
  it("Output text should print x and y if set and place event triggered", async () => {
    await userEvent.type(screen.getByTestId("x"), "1");
    await userEvent.type(screen.getByTestId("y"), "2");
    await userEvent.click(screen.getByTestId("place"));
    expect(screen.getByText(/Output: 1,2,NORTH/i)).toBeInTheDocument();
  });

  it("Given a direction(east or west) and we click on move should increment or decrement x", async () => {
    await userEvent.type(screen.getByTestId("x"), "2");
    await userEvent.type(screen.getByTestId("y"), "2");
    await userEvent.click(screen.getByTestId("place"));
    await userEvent.click(screen.getByTestId("left"));
    await userEvent.click(screen.getByTestId("move"));
    expect(screen.getByText(/Output: 1,2,WEST/i)).toBeInTheDocument();
  });

  it("Given a direction(NORTH or SOUTH) and we click on move should increment or decrement Y", async () => {
    await userEvent.type(screen.getByTestId("x"), "2");
    await userEvent.type(screen.getByTestId("y"), "2");
    await userEvent.click(screen.getByTestId("place"));
    await userEvent.click(screen.getByTestId("left"));
    await userEvent.click(screen.getByTestId("left"));
    await userEvent.click(screen.getByTestId("move"));
    expect(screen.getByText(/Output: 2,1,SOUTH/i)).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("left"));
    await userEvent.click(screen.getByTestId("move"));
    expect(screen.getByText(/Output: 3,1,EAST/i)).toBeInTheDocument();
  });
  it("moves should not exceed 5 in each x and y directions", async () => {
    await userEvent.type(screen.getByTestId("x"), "4");
    await userEvent.type(screen.getByTestId("y"), "4");
    await userEvent.click(screen.getByTestId("place"));
    await userEvent.click(screen.getByTestId("move"));
    await userEvent.click(screen.getByTestId("move"));
    await userEvent.click(screen.getByTestId("move"));
    expect(screen.getByText(/Output: 4,5,NORTH/i)).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("left"));
    await userEvent.click(screen.getByTestId("left"));
    await userEvent.click(screen.getByTestId("move"));
    await userEvent.click(screen.getByTestId("move"));
    await userEvent.click(screen.getByTestId("move"));
    await userEvent.click(screen.getByTestId("move"));
    await userEvent.click(screen.getByTestId("move"));
    await userEvent.click(screen.getByTestId("move"));
    expect(screen.getByText(/Output: 4,0,SOUTH/i)).toBeInTheDocument();
  });
});

describe("Testing the implementation of circular linkedlist", () => {
  it("Default node should be set as North", () => {
    expect(Directions.head.value).toEqual("NORTH");
  });
  it("Prev node to north should point to west and next node to east", () => {
    expect(Directions.head.prev.value).toEqual("WEST");
    expect(Directions.head.next.value).toEqual("EAST");
  });
  it("Next node to west should point to north and prev node to south", () => {
    expect(Directions.head.prev.next.value).toEqual("NORTH");
    expect(Directions.head.prev.prev.value).toEqual("SOUTH");
  });
  it("Given a valid input for face node should be found", () => {
    expect(Directions.find("NORTH")).toBeDefined();
    expect(Directions.find("NORTH").value).toEqual("NORTH");
  });
  it("Given a invalid input for face should be undefined", () => {
    expect(Directions.find("XYZ")).toBeUndefined();
  });
});
