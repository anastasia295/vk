import styled from 'styled-components';

const Button = styled.button<ButtonProps>`
  width: 245px;
  height: 30px;
  font-size: 12px;
  border-radius: 4px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: ${(props) => props.border};
  ...other styles
  background: ${(props) => props.color};
  color: ${(props) => props.color};
`;

interface ButtonProps {
  border?: string;
}

export default Button;
