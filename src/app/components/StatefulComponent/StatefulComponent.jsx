import React, { Component } from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
};

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: 'Show the value here'
    };
  }

  render() {
    return (
      <div style={ style }>
        <h2>{ this.state.inputValue }</h2>
        <input />
      </div>
    );
  }
}