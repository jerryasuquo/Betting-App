import React, { Component } from "react";
import Gameboard from "./Gameboard";
import Button from "./Button";
import "./index.css";
import ThisContextProvider from "./TheContext";

class App extends Component {
  render() {
    return (
      <ThisContextProvider>
        <Gameboard />
        <Button />
      </ThisContextProvider>
    );
  }
}

export default App;
