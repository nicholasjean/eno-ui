import * as React from 'react';
import * as _ from 'lodash';
import { storiesOf } from '@storybook/react';
import Button from './Button';

import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import styled from 'styled-components';

const SpaceDiv = styled.div`
  padding: 16px
`;
type TColor = 'primary' | 'secondary' | 'danger' | 'positive' | 'warning';
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const stories = (storiesOf('Button', module) as any);
const echo = 'It Worked!';
const shapes = {
  square: 'square',
  round: 'round',
};
const types = {
  basic: 'basic',
  outline: 'outline',
  clear: 'clear',
};

const colors = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  positive: 'positive',
  warning: 'warning',
};

const sizes = {
  large: 'large',
  small: 'small',
  default: 'default',
  full: 'full',
};

const allColors = () => {

  return (
    _.map(colors, (color: TColor) => (
      <SpaceDiv>
        <Button
          label={ text('label', capitalize(color)) }
          color={ color }
          onClick={ action(echo) }
          disabled={ boolean('disabled', false) }
          shape={ select('shape', shapes, 'square') }
          type={ select('type', types, 'basic') }
          size={ select('size', sizes, 'default') }
        />
      </SpaceDiv>
    ))
  );
};

stories.addWithJSX(
  'Button',
  (() => (
    <div>
      { allColors() }
    </div>
  ))
);
