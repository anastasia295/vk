import styled from 'styled-components';

import {
  ColorProps,
  TypographyProps,
  SpaceProps,
  LayoutProps,
  color,
  layout,
  typography,
  space,
} from 'styled-system';

const Text = styled.div<TypographyProps & SpaceProps & ColorProps & LayoutProps>`
  ${color}
  ${layout}
${typography}

  ${space}
text-decoration: none;
`;

export default Text;
