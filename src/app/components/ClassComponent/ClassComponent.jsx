import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {

  PropTypes = {
    property: PropTypes.string.isRequired
  };

  // @not mandatory
  constructor(props) {
    super(props);
  }

  // @manadatory
  render() {
    return (
      <div>
        { this.props.property }
      </div>
    );
  }
};