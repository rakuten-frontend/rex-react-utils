import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withInspectHtml } from 'storybook-inspecthtml';

const composeClassName = (
  process.env.NODE_ENV === 'production' ?
    require('../build/node_modules/rex-react-utils').composeClassName :
    require('../src/utils').composeClassName
);

import 'rex-core';

const stories = storiesOf('Utils', module);
stories.addDecorator(withInspectHtml);
stories.addDecorator(withInfo);

// Stories
stories.add('with values', () => {

  const classList = composeClassName([
    'sample',
    'sample-second',
    'sample-third'
  ]);

  return (
    <p {...classList}>Welcome to React</p>
  );
});

stories.add('with empty values', () => {

  const classList = composeClassName([
    '',
    ''
  ]);

  return (
    <p {...classList}>Welcome to React</p>
  );
});

stories.add('without array items', () => {

  const classList = composeClassName([]);

  return (
    <p {...classList}>Welcome to React</p>
  );
});

stories.add('without array parameter', () => {

  const classList = composeClassName();

  return (
    <p {...classList}>Welcome to React</p>
  );
});
