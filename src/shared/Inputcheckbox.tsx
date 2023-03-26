import styled from 'styled-components';

const Inputcheckbox = styled.input<InputcheckboxProps>`
  margin-left: 27px;
  margin-top: 10px
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

interface InputcheckboxProps {
  height?: string;
  width?: string;
}
export default Inputcheckbox;
