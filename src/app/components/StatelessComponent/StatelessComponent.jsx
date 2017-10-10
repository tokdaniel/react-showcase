import React from 'react';
import PropTypes from 'prop-types';

const StatelessComponent = props => {
  return (
    <div>
      { props.value }
    </div>
  );
};

StatelessComponent.propTypes = {
  value: PropTypes.number.isRequired
};

export default StatelessComponent;
