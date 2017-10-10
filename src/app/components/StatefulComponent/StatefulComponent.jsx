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
      datInput: 'Show the value here'
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <div style={ style }>
        <h2>{ this.state.datInput }</h2>
        <input name="datInput" value={ this.state.datInput } onChange={this.handleChange}/>
      </div>
    );
  }
}