import styled from 'styled-components';

const Input = styled.input`
  background-color: #f5fffa;
  font-size: 12px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #eee;

  width: ${(props) => props.width};
`;

export default Input;
