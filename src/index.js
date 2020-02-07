import React from "react";
import ReactDOM from "react-dom";
import GridContainer from "./grid";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <GridContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
