import * as React from 'react';
import * as Styled from './Button.style';

export interface IProps {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'basic' | 'outline' | 'clear';
  shape?: 'square' | 'round';
  size?: 'large' | 'small' | 'default' | 'full';
  color?: 'primary' | 'secondary' | 'danger' | 'positive' | 'warning';
}

export interface IDefaultProps {
  shape: string;
  size: string;
  color: string;
  type: string;
}
const Button: React.SFC<IProps> = (
  {
    label,
    onClick,
    disabled = false,
    type = 'basic',
    shape = 'square',
    size = 'default',
    color = 'primary',
    ...props
  }
) => {
  const checkDisabled = disabled ? 'disabled' : '';
  const additionalProps = {
    checkDisabled,
    type,
    shape,
    color,
  };

  return (
    <Styled.Button
      onClick={ !disabled ? onClick : () => null }
      { ...props }
      { ...additionalProps }
    >
      { label }
    </Styled.Button>
  );
};

export default Button;
