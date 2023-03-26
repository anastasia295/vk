import styled from 'styled-components';

const Content = styled.button<ContentProps>`
  width: 370px;
  height: 430px;
  border: 1px solid #eee;
  border-right: 0;
  border-radius: 4px;
  background-color: ${(props) => props.bcolor};
`;

interface ContentProps {
  bcolor?: string;
}
export default Content;
