import styled from 'styled-components';

const Button = styled.button<ButtonProps>`
  width: 293px;
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #eee;
  border: ${(props) => props.border}px solid #eee;
  background-color: ${(props) => props.bcolor};
  color: ${(props) => props.color};
`;

interface ButtonProps {
  border?: string;
  bcolor?: string;
  color?: string;
}

export default Button;
