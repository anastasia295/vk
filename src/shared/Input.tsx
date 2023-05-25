import styled from 'styled-components';

interface InputProps {
  width?: string;
  bradius?: string;
  bcolor?: string;
  height?: string;
}

const Input = styled.input<InputProps>`
  font-size: 13px;

  height: 35px;
  border-radius: 6px;
  outline: none;
  border: 1px solid #eee;
  display: block;
  padding: 2px 25px;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.bradius}px;
  background-color: ${(props) => props.bcolor};
`;

export default Input;
