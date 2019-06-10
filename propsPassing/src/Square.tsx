import React from "react";
import { ISquareProps } from "./ISquareProps";

export default class Square extends React.Component<ISquareProps> {    
    render() {
        return (
            <button className="square" onClick={this.props.onClick} disabled={this.props.disabled}>
              {this.props.value}
            </button>
        );
    }    
  }