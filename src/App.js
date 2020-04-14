import React, { Component } from "react";
import Button from "./Button";
import Button2 from "./Button2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      // button: null,
    };
  }

  makeIncrementer = (amount) => () =>
    this.setState((prevState) => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  decrement = this.makeIncrementer(-1);

  // callButton = (data) => {
  //   this.setState({
  //     button: data,
  //   });
  // };
  render() {
    debugger;
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>
          Increment count
        </button>
        <button className="decrement" onClick={this.decrement}>
          Decrement count
        </button>
        {/* <Button title="New Button" callback={this.callButton} />
        <Button2 title={this.state.button} /> */}
      </div>
    );
  }
}

export default App;
