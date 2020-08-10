import React, { Component } from "react";
import { ThisContext } from "./TheContext";

class Button extends Component {
  static contextType = ThisContext;
  render() {
    const { changeTheme } = this.context;
    return (
      <div>
        <button className="gameboard-mode" onClick={changeTheme}>
          Mode
        </button>
      </div>
    );
  }
}

export default Button;
