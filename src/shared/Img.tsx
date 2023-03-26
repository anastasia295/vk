import styled from 'styled-components';

const Img = styled.img<ImgProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

interface ImgProps {
  height?: string;
  width?: string;
}
export default Img;
