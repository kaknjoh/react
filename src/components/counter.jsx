import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.getBagdeClassesvalue,
    tags: []
  };
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  /* Jedan nacin renderovanja tags niza u listu*/
  renderTags() {
    if (this.state.tags.length === 0) return "No tags for render";
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );

    /* Drugi nacin jeste da koristimo logicko && u kombinaci sa neki drugim iyrayom jer ce rezultat true && i nekog izaza
    bilo kojeg moze biti string ili broj uvijek biti taj drugi izraz ukoliko je prvi tacan pa se moze i ovako*/
  }
  render() {
    this.getBagdeClasses();
    return (
      <div>
        <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete{" "}
        </button>
        {this.state.tags.length === 0 && "No tags for show"}
        {this.renderTags()}
      </div>
    );
  }
  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
