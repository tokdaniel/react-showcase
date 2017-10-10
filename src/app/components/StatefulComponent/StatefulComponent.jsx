import React, { Component } from 'react';

export default class extends Component {

  constructor(props) {
    super(props);

    // initial state
    this.state = {
      isButtonActive: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    // Changing state is only valid trough setState, to avoid mutations
    this.setState({
      isButtonActive: !this.state.isButtonActive
    });
  }

  // must return a single DOM element
  render() {
    return (
      <div>
        <h2>{ this.state.isButtonActive.toString() }</h2>
        <button onClick={ this.handleClick }>Change</button>
      </div>
    );
  }
}