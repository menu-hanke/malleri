import PropTypes from 'prop-types';
import React from 'react';

const FancyDiv: React.FC = ({children}) => {
  return <div style={{border: '1px solid red'}}>{children}</div>;
};
export default FancyDiv;

FancyDiv.propTypes = {
  children: PropTypes.element.isRequired
};
