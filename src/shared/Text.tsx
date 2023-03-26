import styled from 'styled-components';

const Text = styled.div<{
  fs?: string;
  fw?: string;
  ta?: string;
  lheight?: string;
  width?: string;
  color?: string;
}>`
  font-size: ${(props) => props.fs}px;
  font-weight: ${(props) => props.fw};
  text-align: ${(props) => props.ta};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lheight};
  width: ${(props) => props.width}px;
`;

export default Text;
