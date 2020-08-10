import React, { Component } from "react";
import "./index.css";
import Button from "./Button";
import ThisContextProvider, { ThisContext } from "./TheContext";

class Gameboard extends Component {
  constructor() {
    super();
    this.state = {
      stakes: 8,
      unit: 40.02,
      bet_price: 0,
      winning_average: 20,
    };
    this.handleStake = this.handleStake.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.xxPrice = this.xxPrice.bind(this);
    this.xxStake = this.xxStake.bind(this);
  }

  handleStake() {
    this.setState({
      stakes: this.state.stakes * 4,
    });
  }
  handlePrice() {
    this.setState({
      bet_price: this.state.bet_price + this.state.unit,
    });
  }
  xxPrice() {
    this.setState({
      bet_price: this.state.bet_price * 0,
    });
  }
  xxStake() {
    this.setState({
      stakes: this.state.stakes * 0 + 8,
    });
  }

  static contextType = ThisContext;
  render() {
    const { lightMode, light, dark } = this.context;
    const useTheme = lightMode ? light : dark;
    return (
      <div
        className="gameboard"
        style={{ backgroundColor: useTheme.background }}
      >
        <button
          className="gameboard-stakes"
          style={{
            backgroundColor: useTheme.buttonColor,
            color: useTheme.modeFont,
          }}
        >
          {this.state.stakes}{" "}
        </button>
        <button
          className="gameboard-unit"
          style={{
            backgroundColor: useTheme.buttonColor,
            color: useTheme.modeFont,
          }}
        >
          {this.state.unit}{" "}
        </button>
        <button
          className="gameboard-bet_price"
          style={{
            backgroundColor: useTheme.buttonColor,
            color: useTheme.modeFont,
          }}
        >
          {this.state.bet_price}{" "}
        </button>
        <button
          className="gameboard-winning_average"
          style={{
            backgroundColor: useTheme.buttonColor,
            color: useTheme.modeFont,
          }}
        >
          {this.state.winning_average}{" "}
        </button>
        <div className="gameboard-bet">
          <button
            className="gameboard-stakesup"
            style={{
              backgroundColor: useTheme.buttonColor,
              color: useTheme.modeFont,
            }}
          >
            {" "}
            +stakes{" "}
          </button>
          <button
            className="gameboard-priceup"
            style={{
              backgroundColor: useTheme.buttonColor,
              color: useTheme.modeFont,
            }}
          >
            {" "}
            +price{" "}
          </button>
          <button
            className="gameboard-stakesdown"
            style={{
              backgroundColor: useTheme.buttonColor,
              color: useTheme.modeFont,
            }}
          >
            {" "}
            -stakes{" "}
          </button>
          <button
            className="gameboard-pricedown"
            style={{
              backgroundColor: useTheme.buttonColor,
              color: useTheme.modeFont,
            }}
          >
            {" "}
            -price{" "}
          </button>
        </div>
        {/* <div className="gameboard-mode">
          <button
            style={{
              backgroundColor: useTheme.buttonColor,
              color: useTheme.modeFont,
            }}
          >
            {" "}
            mode{" "}
          </button>
        </div> */}
      </div>
    );
  }
}

export default Gameboard;
