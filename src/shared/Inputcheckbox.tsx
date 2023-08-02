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

const Inputcheckbox = styled.input<
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

export default Inputcheckbox;
