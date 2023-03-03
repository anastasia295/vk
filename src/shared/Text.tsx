import styled from 'styled-components';

interface IText {
  fs?: string;
  fw?: string;
  ta?: string;
}

const Text = styled.div<{ fs?: string; fw?: string; ta?: string }>`
  font-size: ${(props) => props.fs}px;
  font-weight: ${(props) => props.fw};
  text-align: ${(props) => props.ta};
  color: ${(props) => props.color} ...other styles;
`;

export default Text;
