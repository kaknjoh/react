import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          />
        ))}
        <button
          className="btn btn-outline-primary "
          onClick={this.props.onCreate}
        >
          Create Counter
        </button>
      </div>
    );
  }
}

export default Counters;
