import styled from 'styled-components';

const Flexbox = styled.div<FlexboxProps>`
  justify-content: ${(props) => props.justifyContent};
  display: ${(props) => props.display};
  align-items: ${(props) => props.aitems};
  flex-direction: ${(props) => props.direction};
`;

interface FlexboxProps {
  justifyContent?: string;
  display?: string;
  aitems?: string;
  direction?: string;
}
export default Flexbox;
