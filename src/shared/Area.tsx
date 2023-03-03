import styled from 'styled-components';
interface AreaProps {
  mr?: string;
  mt?: string;
  margin?: string;
  pl?: string;
  mb?: string;
  width?: string;
  height?: string;
}
const Area = styled.div<AreaProps>`
  margin-top: ${(props) => props.mt}px;
  margin-right: ${(props) => props.mr}px;
  margin: ${(props) => props.margin}px;
  padding-left: ${(props) => props.pl}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-bottom: ${(props) => props.mb}px ...other styles;
`;

export default Area;
