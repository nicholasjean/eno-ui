import styled, { StyledComponentClass } from 'styled-components';
import { size, colors } from '../variables';
import { IDefaultProps } from './Button';
const fw = 400;
const bw = '1px';

export const Button: StyledComponentClass<React.HTMLProps<HTMLButtonElement>, {}> = styled.button`
  display: inline-block;
  color: white
  font-weight: ${fw};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${bw} solid transparent;
  ${(props: IDefaultProps) => props.type !== 'clear' && `border-color: ${colors[props.color]}`};
  border-radius: ${(props: IDefaultProps) => props.shape === 'square' ? 8 : 16}px;
  line-height: ${size.btnLineHeight}
  padding: ${size.btnPaddingY} ${size.btnPaddingX}
  font-size: 16px
  background-color:
    ${(props: IDefaultProps) => props.type === 'outline' || props.type === 'clear' ?
      colors.light : colors[props.color]}
  color:
    ${(props: IDefaultProps) => (props.type === 'outline' || props.type === 'clear' ?
      colors[props.color] :
      props.color === 'light' ? colors.dark : colors.light)}
  ${(props: IDefaultProps) => props.size === 'full' && 'width: 100%' }
`;
Button.displayName = 'Button';
