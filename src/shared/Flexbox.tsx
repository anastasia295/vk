import styled from 'styled-components';

const Flexbox = styled.div<FlexboxProps>`
  justify-content: ${(props) => props.justifyContent};
  display: ${(props) => props.display};
  align-items: ${(props) => props.aitems};
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.fwrap};
  align-content: ${(props) => props.acontent};
`;

interface FlexboxProps {
  justifyContent?: string;
  display?: string;
  aitems?: string;
  direction?: string;
  fwrap?: string;
  acontent?: string;
}
export default Flexbox;
