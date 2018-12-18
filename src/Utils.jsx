import React from 'react';
import PropTypes from 'prop-types';
import 'rex-core';
import './Utils.scss';

export default function Utils({
  children,
  onClick,
  text,
  className
}) {

  return (
    <div className={className} onClick={onClick}>
      <h1>{text}</h1>
      {children}
    </div>
  );
};

Utils.defaultProps = {
  text: 'Welcome to React',
  className: 'rex-react-utils',
  onClick: () => { }
};

Utils.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string, 
  onClick: PropTypes.func
};
