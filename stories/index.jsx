import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import { host } from 'storybook-host';

const Example = (
  process.env.NODE_ENV === 'production' ?
    require('../build/node_modules/rex-react-utils/example.production.min').default :
    require('../src/Example').default
);

const stories = storiesOf('Utils Example', module);
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addDecorator(
  host({
    align: 'center bottom',
    height: '80%',
    width: 425,
    title: 'How to compose multiple classNames and avoid the empty `class` attribute on DOM elements'
  }),
);
// Stories
stories.add('composing classNames', () => {

  const textWelcome = text('class', 'alert alert-success alert-dismissible');

  return (
    <Example className={textWelcome} />
  );
});
