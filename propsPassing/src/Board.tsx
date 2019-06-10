import React from "react";
import Square from "./Square";
import { IBoardProps } from "./IBoardProps";

export default class Board extends React.Component<IBoardProps> {
    renderSquare(i: number) {
      let disabledState = false;
  
      if (this.props.squares[i] != null)
        disabledState = true;
  
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          disabled = {disabledState}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }