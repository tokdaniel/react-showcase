import React from 'react';
import PropTypes from 'prop-types';

import './StatelessComponent.scss';

const StatelessComponent = props => {
  return (
    <div className="stateless-component">
      <h1>{ props.value }</h1>
    </div>
  );
};

StatelessComponent.propTypes = {
  value: PropTypes.number.isRequired
};

export default StatelessComponent;
