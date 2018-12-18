import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import { withInspectHtml } from 'storybook-inspecthtml';

const Utils = (
  process.env.NODE_ENV === 'production' ?
    require('../build/node_modules/rex-react-utils').default :
    require('../src/Utils').default
);

const stories = storiesOf('Utils', module);
stories.addDecorator(withInspectHtml);
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

// Stories
stories.add('default', () => <Utils />);
stories.add('with text', () => <Utils text={'Welcome to React example'} />);
stories.add('with className', () => <Utils className={'color-black active'} />);

stories.add('with onClick', () => {
  const onClickSample = action('clicked');

  return (
    <Utils onClick={onClickSample} />
  );
});

stories.add('with children', () => {

  return (
    <Utils>
      <p>Hello World</p>
    </Utils>
  );
});

stories.add('with dynamic props', () => {

  const textWelcome = text('text', 'Welcome to Dynamic React');

  return (
    <Utils text={textWelcome} />
  );
});
