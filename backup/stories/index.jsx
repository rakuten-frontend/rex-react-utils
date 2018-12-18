import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';

const Utils = (
  process.env.NODE_ENV === 'production' ?
    require('../build/node_modules/rex-react-utils/utils.production.min') :
    require('../src/utils')
);

import 'rex-core';

const stories = storiesOf('Utils Example', module);
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
// Stories
stories.add('composing classNames', () => {

  const composeClassName = Utils.composeClassName;

  const classList = composeClassName([
    'alert',
    'alert-success',
    'alert-dismissible'
  ]);

  return (
    <p {...classList}>Welcome to React</p>
  );
});
