import React, { Component } from 'react';

export default class extends Component {

  // @not mandatory
  constructor(props) {
    super(props);
  }

  // @manadatory
  render() {
    return (
      <div>
        Hello from a class component!
      </div>
    );
  }
};