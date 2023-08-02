import styled from 'styled-components';

import { FlexboxProps, flexbox, LayoutProps, layout } from 'styled-system';

const Flexbox = styled.div<LayoutProps & FlexboxProps>`
  ${layout}

  ${flexbox}
`;

export default Flexbox;
