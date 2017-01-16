import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
  	super(props);
  	this.state = {
  		count: 0,
  		increment:1
  	}
  }

  increment() {
  	let count = this.state.count;
    let increment = this.state.increment;
    let newCount = count += increment;
    this.setState({ count: newCount });
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={this.increment.bind(this)}>Incrementa</button>
      </div>
    );
  }
}

export default App;
