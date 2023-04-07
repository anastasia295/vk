import styled from 'styled-components';

const Img = styled.img<ImgProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.bradius}px;
`;

interface ImgProps {
  height?: string;
  width?: string;
  bradius?: string;
}
export default Img;
