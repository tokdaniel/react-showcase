import React, { Component } from 'react';

import { StatelessComponent } from '../../components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  // this is a so-called lifecycle method
  componentDidMount() {
    // lets pretend this is a websocket connection
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }

  render() {
    return (
      <StatelessComponent value={ this.state.counter }/>
    );
  }
}
