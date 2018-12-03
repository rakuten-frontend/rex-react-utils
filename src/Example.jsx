import React from 'react';
import { string } from 'prop-types';
import { composeClassName } from './utils';

export default function Example({
  className
}) {

  const classList = composeClassName(className);

  return (
    <div {...classList}>Welcome to React</div>
  );
};

Example.defaultProps = {
  className: '',
};

Example.propTypes = {
  className: string,
};
