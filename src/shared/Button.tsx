/*import styled from 'styled-components';

function getNumber(num?: string) {
  if (typeof num === 'number') {
    return `${num}%`;
  }
  return num;
}

const Button = styled.button<ButtonProps>`
  width: 293px;
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  display: block;
  margin-right: ${(props) => getNumber(props.mr)};
  margin-left: ${(props) => getNumber(props.ml)};
  border: 1px solid #eee;
  border: ${(props) => props.border}px solid #eee;
  background-color: ${(props) => props.bcolor};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.mt}px;
  margin-right: ${(props) => props.mr}px;
  margin-left: ${(props) => props.ml}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

interface ButtonProps {
  border?: string;
  bcolor?: string;
  color?: string;
  mr?: string;
  mt?: string;
  ml?: string;
  width?: string;
  height?: string;
}

export default Button; **/
import styled from 'styled-components';

import {
  ColorProps,
  TypographyProps,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  position,
  color,
  layout,
  typography,
  space,
  background,
  border,
  BackgroundColorProps,
} from 'styled-system';

const Button = styled.button<
  TypographyProps &
    SpaceProps &
    ColorProps &
    LayoutProps &
    BackgroundColorProps &
    BorderProps &
    PositionProps
>`
  ${color}
  ${layout}
${typography}

  ${space}
  
  ${background}
  ${border}
${position}
`;

export default Button;
