import styled from 'styled-components';

interface InputProps {
  width?: string;
  bradius?: string;
}

const Input = styled.input<InputProps>`
  background-color: #f5fffa;
  font-size: 13px;
  margin-left: auto;
  margin-right: auto;
  height: 35px;
  border-radius: 6px;
  outline: none;
  border: 1px solid #eee;
  display: block;
  padding: 2px 25px;

  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.bradius}px;
`;

export default Input;
