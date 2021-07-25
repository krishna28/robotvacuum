import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Direction from "./util/LinkedList";

import FACES from "./util/Faces";

const unitInPx = 90;

function App() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const xRef = useRef();
  const yRef = useRef();
  const faceRef = useRef();

  useEffect(() => {
    M.AutoInit();
  });

  const [robotPositionInDegree, setRobotPositionInDegree] = useState(0);

  const [face, setFace] = useState(FACES.NORTH);
  const [currentDirection, setCurrentDirection] = useState(Direction.head);

  const handleMove = () => {
    if (x === "") {
      return false;
    }
    switch (currentDirection.value) {
      case FACES.NORTH:
        setY(function (current) {
          if (current > 4) {
            return current;
          }
          return +current + 1;
        });
        break;
      case FACES.EAST:
        setX(function (current) {
          if (current > 4) {
            return current;
          }
          return +current + 1;
        });
        break;
      case FACES.SOUTH:
        setY(function (current) {
          if (current < 1) {
            return current;
          }
          return +current - 1;
        });
        break;
      case FACES.WEST:
        setX(function (current) {
          if (current < 1) {
            return current;
          }
          return +current - 1;
        });
        break;
      default:
    }
  };

  const handleLeft = () => {
    if (x === "") {
      return false;
    }
    setRobotPositionInDegree(current => {
      return current - 90;
    });
    setCurrentDirection(function (current) {
      let prevNode = current ? current.prev : Direction.head;
      setFace(prevNode.value);
      return prevNode;
    });
  };

  const handleRight = () => {
    if (x === "") {
      return false;
    }
    setRobotPositionInDegree(current => {
      return current + 90;
    });
    setCurrentDirection(function (current) {
      let nextNode = current ? current.next : Direction.head;
      setFace(nextNode.value);
      return nextNode;
    });
  };

  const generateReport = () => {
    console.log("Output: ", x, y, currentDirection.value);
  };

  const handleRobotPlace = e => {
    e.preventDefault();
    const x = xRef.current.value;
    const y = yRef.current.value;
    const face = faceRef.current.value;
    if (!x || !y || !face || x < 0 || y < 0 || x > 5 || y > 5) {
      return false;
    }
    setX(x);
    setY(y);
    setFace(face);
    let node = Direction.find(face);
    if (node) {
      setCurrentDirection(node);
    }
    switch (face) {
      case FACES.NORTH:
        setRobotPositionInDegree(0);
        break;
      case FACES.EAST:
        setRobotPositionInDegree(90);
        break;
      case FACES.SOUTH:
        setRobotPositionInDegree(180);
        break;
      case FACES.WEST:
        setRobotPositionInDegree(-90);
        break;
      default:
        setRobotPositionInDegree(0);
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Robot Vacuum
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s6">
            <div className="row">
              <div className="input-field col s12 m4">
                <i className="material-icons prefix">X</i>
                <input
                  type="number"
                  ref={xRef}
                  min="0"
                  max="5"
                  placeholder="x-coordinate"
                />
              </div>
              <div className="input-field col s12 m4">
                <i className="material-icons prefix">Y</i>
                <input
                  type="number"
                  className="validate"
                  ref={yRef}
                  min="0"
                  max="5"
                  placeholder="y-coordinate"
                />
              </div>
              <div className="input-field col s12 m4">
                <select name="face" ref={faceRef}>
                  <option value={FACES.NORTH}>{FACES.NORTH}</option>
                  <option value={FACES.SOUTH}>{FACES.SOUTH}</option>
                  <option value={FACES.EAST}>{FACES.EAST}</option>
                  <option value={FACES.WEST}>{FACES.WEST}</option>
                </select>
              </div>
              <button
                className="waves-effect waves-light btn-small margin"
                id="place"
                onClick={handleRobotPlace}
              >
                Place
              </button>
            </div>
            <div className="row">
              <div>
                <button
                  className="waves-effect waves-light btn-small margin"
                  id="move"
                  onClick={handleMove}
                >
                  Move
                </button>
                <button
                  className="waves-effect waves-light btn-small margin"
                  id="left"
                  onClick={handleLeft}
                >
                  Left
                </button>
                <button
                  className="waves-effect waves-light btn-small margin"
                  id="right"
                  onClick={handleRight}
                >
                  Right
                </button>
                <button
                  className="waves-effect waves-light btn-small margin"
                  id="report"
                  onClick={generateReport}
                >
                  Report
                </button>
              </div>
              <div className="collection">
                <a href="#!" className="collection-item">
                  <span className="badge">{x}</span>X
                </a>
                <a href="#!" className="collection-item">
                  <span className="badge">{y}</span>Y
                </a>
                <a href="#!" className="collection-item">
                  <span className="badge">{face}</span>Face
                </a>
              </div>
            </div>
            <h6>
              Output: {x},{y},{face}
            </h6>
          </div>
          <div className="col s6">
            <div className="Main-container">
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  transform: `translate(${x * unitInPx}px,${-y * unitInPx}px)`,
                }}
              >
                <i
                  className="fas fa-robot fa-2x Icon-color"
                  style={{ transform: `rotate(${robotPositionInDegree}deg)` }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
